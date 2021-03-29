import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FiCalendar as CalendarIcon, FiUser as UserIcon } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={`${commonStyles.content} ${styles.content}`}>
        <ul className={styles.postsList}>
          <li>
            <h1>Como utilizar Hooks</h1>

            <p>Pensando em sincronização de ciclos de vida.</p>

            <div className={styles.postInfoContainer}>
              <div>
                <CalendarIcon />

                <time>15 Mar 2021</time>
              </div>

              <div>
                <UserIcon />

                <span>Joseph Oliveira</span>
              </div>
            </div>
          </li>

          <li>
            <h1>Como utilizar Hooks</h1>

            <p>Pensando em sincronização de ciclos de vida.</p>

            <div className={styles.postInfoContainer}>
              <div>
                <CalendarIcon />

                <time>15 Mar 2021</time>
              </div>

              <div>
                <UserIcon />

                <span>Joseph Oliveira</span>
              </div>
            </div>
          </li>
        </ul>

        <button type="button">Carregar mais posts</button>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };
