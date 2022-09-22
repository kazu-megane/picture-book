import { useState } from "react";
import type { NextPage } from "next";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import styles from "./style.module.scss";
import page1 from "../../statics/images/p1.gif";
import page2 from "../../statics/images/p2.gif";
import page3 from "../../statics/images/p3.gif";
import page4 from "../../statics/images/p4.gif";
import page5 from "../../statics/images/p5.gif";
import page6 from "../../statics/images/p6.gif";
import page7 from "../../statics/images/p7.gif";
import page8 from "../../statics/images/p8.gif";
import page9 from "../../statics/images/p9.gif";
import page10 from "../../statics/images/p10.gif";
import page11 from "../../statics/images/p11.gif";
import page12 from "../../statics/images/p12.gif";
import page13 from "../../statics/images/p13.gif";
import page14 from "../../statics/images/p14.gif";
import page15 from "../../statics/images/p15.gif";

import "@splidejs/react-splide/css";

const Pictures: NextPage = () => {
  const [activeSlideNumber, setActiveSlideNumber] = useState(0);
  const contents: Array<{ image: StaticImageData; texts: Array<string> }> = [
    {
      image: page1,
      texts: [
        "突然だけど、",
        "今日はあいかの知らないボクの秘密を",
        "打ち明けようと思います。",
      ],
    },
    {
      image: page2,
      texts: ["あいかとはときどきケンカもするし、正直ムカつくこともあります。"],
    },
    {
      image: page3,
      texts: [
        "でももしあいかが世界中を敵に回すようなことがあっても、",
        "ボクは絶対にキミの味方です。",
      ],
    },
    {
      image: page4,
      texts: ["あいかは、いつだってボクの夢を応援してくれます。"],
    },
    {
      image: page5,
      texts: [
        "だからもしあいかに挑戦したい夢があるのなら、",
        "ボクは全身全霊でキミをサポートします。",
      ],
    },
    {
      image: page6,
      texts: [
        "あいかは菩薩みたいな笑顔で笑ったかと思うと、",
        "突然般若のような顔で怒ります。",
      ],
    },
    {
      image: page7,
      texts: [
        "そのギャップも魅力の一つなんですが、",
        "どちらかというとボクは菩薩派です。",
      ],
    },
    {
      image: page8,
      texts: [
        "あいかは誰よりも落ち着く存在だから、",
        "ときどきそれに甘えてしまうボクがいます。",
      ],
    },
    {
      image: page9,
      texts: [
        "本当は一番伝えなきゃいけない「ありがとう」が",
        "なかなか言えなくてごめん。",
      ],
    },
    {
      image: page10,
      texts: ["ボクが好きになったのは", "あいかです。"],
    },
    {
      image: page11,
      texts: [
        "心優しいあいかも、",
        "理不尽なことで怒るあいかも、",
        "全部ひっくるめてボクが好きになった人です。",
      ],
    },
    {
      image: page12,
      texts: [
        "あいかが笑うと、ボクはとてもうれしいキモチになれます。",
        "泣いているときは、絶望的なキモチになります。",
      ],
    },
    {
      image: page13,
      texts: [
        "本当は知っているんです。",
        "幸せの正体は、大切な人を笑顔にできた実感なんだってこと。",
      ],
    },
    {
      image: page14,
      texts: [
        "恥ずかしくてなかなか口に出しては言えないけど、",
        "ボクにはあいかが必要です。",
      ],
    },
    {
      image: page15,
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
                <Image
                  src={content.image}
                  alt={`page${index + 1}`}
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
