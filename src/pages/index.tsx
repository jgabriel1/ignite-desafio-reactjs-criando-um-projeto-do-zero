import { useCallback, useState } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from '@prismicio/client';
import { FiCalendar as CalendarIcon, FiUser as UserIcon } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';
import { formatDate } from '../util/formatDate';

import Header from '../components/Header';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [posts, setPosts] = useState<Post[]>(() => postsPagination.results);
  const [nextPageUrl, setNextPageUrl] = useState<string | null>(
    () => postsPagination.next_page
  );

  const handleFetchMorePosts = useCallback(async () => {
    const response = await fetch(nextPageUrl);

    const data = await response.json();

    const formattedPosts = data.results.map(post => {
      return {
        uid: post.uid,
        first_publication_date: post.first_publication_date,
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author,
        },
      };
    });

    setPosts(current => [...current, ...formattedPosts]);
    setNextPageUrl(data.next_page);
  }, [nextPageUrl]);

  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <Header />

      <main className={`${commonStyles.content} ${styles.content}`}>
        <ul className={styles.postsList}>
          {posts.map(post => (
            <Link key={post.uid} href={`/posts/${post.uid}`}>
              <li>
                <h1>{post.data.title}</h1>

                <p>{post.data.subtitle}</p>

                <div className={styles.postInfoContainer}>
                  <div>
                    <CalendarIcon />

                    <time>{formatDate(post.first_publication_date)}</time>
                  </div>

                  <div>
                    <UserIcon />

                    <span>{post.data.author}</span>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>

        {nextPageUrl && (
          <button type="button" onClick={handleFetchMorePosts}>
            Carregar mais posts
          </button>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const prismic = getPrismicClient();

  const postsResponse = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts'),
    {
      fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 5,
    }
  );

  const formattedPosts = postsResponse.results.map(post => {
    return {
      uid: post.uid,
      first_publication_date: post.first_publication_date,
      data: {
        title: post.data.title,
        subtitle: post.data.subtitle,
        author: post.data.author,
      },
    };
  });

  return {
    props: {
      postsPagination: {
        next_page: postsResponse.next_page,
        results: formattedPosts,
      },
    },
  };
};
