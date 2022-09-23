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
        router.push("/pictures");
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
            <title>Cover</title>
            <meta name="description" content="テガミ-cover-" />
          </Head>
          <main className={styles.main}>
            <div className={styles.columns}>
              <div className={styles.leftColumn}>テガミ</div>
              <div className={styles.rightColumn}>あいかへ</div>
            </div>
            <p className={styles.leadText}>
              <span className={styles.leadTextContent}>下にスクロール</span>
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
