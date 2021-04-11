import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import {
  FiCalendar as CalendarIcon,
  FiUser as UserIcon,
  FiClock as ClockIcon,
} from 'react-icons/fi';
import { RichText } from 'prismic-dom';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import { formatDate } from '../../util/formatDate';
import styles from './post.module.scss';
import { calculateAverageReadTime } from '../../util/calculateAverageReadTime';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  const router = useRouter();

  const content = useMemo(() => {
    if (!post) return [];

    const paragraphs = post.data.content;

    return paragraphs.map(paragraph => {
      const text = RichText.asText(paragraph.body);

      return {
        title: paragraph.heading,
        text,
      };
    });
  }, [post]);

  const timeToRead = useMemo(() => {
    const totalWords = content.reduce((accum, block) => {
      const titleWords = block.title.split(' ').length;

      const textWords = block.text.split(' ').length;

      return accum + titleWords + textWords;
    }, 0);

    return calculateAverageReadTime(totalWords);
  }, [content]);

  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <Head>
        <title>Post | spacetraveling</title>
      </Head>

      <img
        src={post.data.banner.url}
        alt="post_image"
        className={styles.postImage}
      />

      <main className={`${commonStyles.content} ${styles.content}`}>
        <h1>{post.data.title}</h1>

        <div className={styles.postInfoContainer}>
          <span>
            <CalendarIcon />

            <time>{formatDate(post.first_publication_date)}</time>
          </span>

          <span>
            <UserIcon />

            <p>{post.data.author}</p>
          </span>

          <span>
            <ClockIcon />

            <p>{`${timeToRead} min`}</p>
          </span>
        </div>

        <article>
          {content.map(block => (
            <div key={block.title}>
              <h3>{block.title}</h3>

              <p>{block.text}</p>
            </div>
          ))}
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { slug: 'proturbat-feres-requirit-materque-ictibus-elisarum' },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('posts', String(slug), {});

  const post: Post = {
    first_publication_date: response.first_publication_date,
    data: {
      author: response.data.author,
      banner: response.data.banner,
      content: response.data.content,
      title: response.data.title,
    },
  };

  return {
    props: { post },
  };
};
