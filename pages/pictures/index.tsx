import { useState } from "react";
import type { NextPage } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";
import { url } from "../../utils";
import styles from "./style.module.scss";

import "@splidejs/react-splide/css";

const Pictures: NextPage = () => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);
  const contents: Array<{ image: string; texts: Array<string> }> = [
    {
      image: "p1",
      texts: [
        "突然だけど、",
        "今日はあいかの知らないボクの秘密を",
        "打ち明けようと思います。",
      ],
    },
    {
      image: "p2",
      texts: ["あいかとはときどきケンカもするし、正直ムカつくこともあります。"],
    },
    {
      image: "p3",
      texts: [
        "でももしあいかが世界中を敵に回すようなことがあっても、",
        "ボクは絶対にキミの味方です。",
      ],
    },
    {
      image: "p4",
      texts: ["あいかは、いつだってボクの夢を応援してくれます。"],
    },
    {
      image: "p5",
      texts: [
        "だからもしあいかに挑戦したい夢があるのなら、",
        "ボクは全身全霊でキミをサポートします。",
      ],
    },
    {
      image: "p6",
      texts: [
        "あいかは菩薩みたいな笑顔で笑ったかと思うと、",
        "突然般若のような顔で怒ります。",
      ],
    },
    {
      image: "p7",
      texts: [
        "そのギャップも魅力の一つなんですが、",
        "どちらかというとボクは菩薩派です。",
      ],
    },
    {
      image: "p8",
      texts: [
        "あいかは誰よりも落ち着く存在だから、",
        "ときどきそれに甘えてしまうボクがいます。",
      ],
    },
    {
      image: "p9",
      texts: [
        "本当は一番伝えなきゃいけない「ありがとう」が",
        "なかなか言えなくてごめん。",
      ],
    },
    {
      image: "p10",
      texts: ["ボクが好きになったのは", "あいかです。"],
    },
    {
      image: "p11",
      texts: [
        "心優しいあいかも、",
        "理不尽なことで怒るあいかも、",
        "全部ひっくるめてボクが好きになった人です。",
      ],
    },
    {
      image: "p12",
      texts: [
        "あいかが笑うと、ボクはとてもうれしいキモチになれます。",
        "泣いているときは、絶望的なキモチになります。",
      ],
    },
    {
      image: "p13",
      texts: [
        "本当は知っているんです。",
        "幸せの正体は、大切な人を笑顔にできた実感なんだってこと。",
      ],
    },
    {
      image: "p14",
      texts: [
        "恥ずかしくてなかなか口に出しては言えないけど、",
        "ボクにはあいかが必要です。",
      ],
    },
    {
      image: "p15",
      texts: [
        "あいかと出会って1年半。",
        "色んな思い出を作ったね。",
        "笑い合ったり、喧嘩したり。",
        "全部楽しかったよ!",
        "ありがとう!",
        "これからもたくさん楽しませて幸せにします。",
        "約束します。",
        "誕生日おめでとう!",
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>テガミ</title>
        <meta name="description" content="テガミ-あいかへ-" />
      </Head>

      <main className={styles.main}>
        <div>
          <p className={styles.text}>
            {contents[activeSlideNumber].texts.map((text, index) => {
              if (index === 0) {
                return text;
              }
              return (
                <>
                  <br />
                  {text}
                </>
              );
            })}
          </p>
          <Splide
            aria-label="My Favorite Images"
            options={{
              pagination: false,
              classes: {
                prev: `splide__arrow--prev ${styles["arrow--prev"]}`,
                next: `splide__arrow--next ${styles["arrow--next"]}`,
              },
            }}
            onActive={(active) => {
              setActiveSlideNumber(active.index);
            }}
            className={styles.splide}
          >
            {contents.map((content, index) => (
              <SplideSlide key={index} className={styles.slide}>
                <img
                  src={url(`/images/${content.image}.gif`)}
                  alt={`page${index + 1}`}
                  width={1024}
                  height={724}
                  className={styles.image}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </main>
    </div>
  );
};

export default Pictures;
