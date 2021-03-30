import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import {
  FiCalendar as CalendarIcon,
  FiUser as UserIcon,
  FiClock as ClockIcon,
} from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

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

export default function Post() {
  return (
    <>
      <Head>
        <title>Post | spacetraveling</title>
      </Head>

      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--qmJQaP4m--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7iz9px0mntla0kbw1h1i.jpg"
        alt="post_image"
        className={styles.postImage}
      />

      <main className={`${commonStyles.content} ${styles.content}`}>
        <h1>Criando um app CRA do zero</h1>

        <div className={styles.postInfoContainer}>
          <span>
            <CalendarIcon />

            <time>15 Mar 2021</time>
          </span>

          <span>
            <UserIcon />

            <p>Joseph Oliveira</p>
          </span>

          <span>
            <ClockIcon />

            <p>4 min</p>
          </span>
        </div>

        <article>
          <div
            dangerouslySetInnerHTML={{
              __html: `
          <h1 id="pars-regia-labori">Pars regia labori</h1>
          <h2 id="o-in-quas-vincite">O in quas vincite</h2>
          <p>Lorem <strong>markdownum femori</strong> nobis; eget aliter et non Luna. Curvantur nunc illo
          abesto inulta Solis, Medon tuis dederat <a href="http://hominifuneribus.net/">suadent</a>,
          tandem ille. Lanas ex inmeritas regem ambobus, cladem iracunda, invicti patitur.
          Vestros ut iussis fruges.</p>
          <pre><code>wildcard = <span class="hljs-keyword">byteBootExpansion;
          </span>var file_dslam = interactive_artificial_print<span class="hljs-comment">;</span>
          itunesVpiAvatar = ram<span class="hljs-comment">;</span>
          speedClean.infringement_iphone_intellectual +=
                  skin_query_controller.rgb_bash_adc(intellectualGibibyteSink)<span class="hljs-comment">;</span>
          if (market + cpu) {
              api_memory_domain(ipv_mbps_component(mediaLanErgonomics, eup_pretest),
                      <span class="hljs-keyword">bespokeSram, </span>drive)<span class="hljs-comment">;</span>
              source_dial += cd<span class="hljs-comment">;</span>
          } else {
              computer_control += camera_font.http(ftp_codec, <span class="hljs-number">1</span> + thunderbolt_alu)<span class="hljs-comment">;</span>
              <span class="hljs-keyword">cloud.exbibyteOn </span>+= handleWheel<span class="hljs-comment">;</span>
          }
          </code></pre><p>Per bacis gramine. Famae inerti ut coma iram et leve quo loquar <em>pellite</em>
          strepitus ire, lugubris astris? Quodque gurgite in semper Cyanen despectat
          transit senectus, somnis undis, cum mendacique obruta feretrumque illa. Pectora
          et ambo <em>vitibus his malorum</em> in ululasse petit securaque mentior iamque rege,
          mihi ego.</p>
          <blockquote>
          <p>Panchaeaque dicta fama hos aevo protinus solum opacas potuere linguae tegit
          per vidit esse nabat imagine. Omnibus ignea in nostris vocant in quoque
          lacriment iuvenis minata mollibus. Tradunt aptabat insula sunt, in silva
          iuvenali gravidis, et <strong>ferro cur Euboica</strong> Tyrios vidit spatiosumque causa in
          quidem.</p>
          </blockquote>
          <h2 id="vota-bubo-visum">Vota bubo visum</h2>
          <p>Magico ille venae quod subito animusque crudelis sequor capiti, rector locus,
          arti! Pro fatigatum paelex erat rumpe virorum. Patrii verba amante vides captam,
          et senectus bellum Cecropidum rubet.</p>
          <pre><code>if (codec(time_input_manet, font)) {
              mirrored_safe.methodFiberGate = tablet(<span class="hljs-keyword">digitalFormat,
          </span>            ringText.publishing(<span class="hljs-number">3</span>, vdu, -<span class="hljs-number">4</span>))<span class="hljs-comment">;</span>
              deviceDual(hot_language_point)<span class="hljs-comment">;</span>
          }
          readme += <span class="hljs-number">89</span><span class="hljs-comment">;</span>
          var openClean = monitorJsf(windowsTrackballWeb)<span class="hljs-comment">;</span>
          </code></pre><p>Dummodo superasque tria labentibus vetitus. Pulcherrima meique ne nec formam
          pars vertitur lacrimas, magni Pelasgos separat flumina lenta, in. Et <a href="http://sub.io/amplexans-ceyca">nata
          redde</a>, qui <a href="http://www.errandum.io/">movente</a>
          hostia aditus? In animalia serpens exire novat: lassa: est tamen celasset ilex
          pavefactaque ardua? Monte pinum carbasa concurrere undis; non has stirpe Cinyra.</p>
          <blockquote>
          <p>Ad dixi fidesque caput, perdideris talia spiritus fraudes igitur <a href="http://etad.com/">putat
          metuam</a> contentusque <strong>passi</strong>, haut cava Vasta sed? Omnia
          siquidem o iubent thracius sceptra Orithyia vixque, hic herbas. Aut mentis, tu
          res; cum Pelias, fraudare nando, venturaque monebat <strong>partu ambrosiae</strong> nunc.</p>
          </blockquote>
          <p>Tu triste mihi haustos thalamos margine <a href="http://www.salve.io/latebris-prodit">stabula amorque
          praedam</a> viscera, glandes. Ira se <em>parabat
          sopore et</em> adversa Milete et a iugis: <strong>serpunt</strong> dedit! Aut amplexa; more est
          querno citraque pensas euntem. Novitate nec de, et ligat.</p>

          `,
            }}
          />
        </article>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
