import classNames from "classnames";
import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { Transition } from "react-transition-group";
import Head from "next/head";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import styles from "./style.module.scss";

import "@splidejs/react-splide/css";

const Home: NextPage = () => {
  const router = useRouter();
  const [isFire, setIsFire] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setIsFire(true);
    }
  }, [inView]);

  return (
    <Transition
      in={isFire}
      timeout={1000}
      onEntered={() => {
        router.push("/");
      }}
    >
      {(state) => (
        <div
          className={classNames(
            styles.container,
            styles[`container--${state}`]
          )}
        >
          <Head>
            <title>裏表紙</title>
            <meta name="description" content="テガミ-裏表紙-" />
          </Head>
          <main className={styles.main}>
            <div className={styles.columns}>
              <div className={styles.leftColumn}>2022.09.24</div>
              <div className={styles.rightColumn}>
                <div>
                  <p className={styles.title}>テガミ</p>
                  <ul className={styles.captions}>
                    <li className={styles.caption}>
                      <p className={styles.captionHead}>作</p>
                      <p className={styles.captionContent}>
                        <span className={styles.captionContentText}>
                          橋本 和也
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className={styles.leadText}>
              <span className={styles.leadTextContent}>
                下にスクロールして表紙へ
              </span>
              <span className={styles.leadTextIcon}>↓</span>
            </p>
            <div ref={ref} className={styles.target}></div>
          </main>
        </div>
      )}
    </Transition>
  );
};

export default Home;
