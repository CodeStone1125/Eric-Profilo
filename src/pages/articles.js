import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/layout";
import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import article1 from "../../public/images/articles/Internship experience in RTK.png";
import article2 from "../../public/images/articles/Enabling Failure-resilient Intermittently-powered Systems Without Runtime Checkpointing.png";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        intial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-20 w-96 h-auto  hidden absolute rounded-lg object-cover md:!hidden"
      />
    </Link>
  );
};

const Article = ({ img, title, time, link }) => {
  return (
    <motion.li
    intial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"} }}
    viewport={{once: true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
     dark:border-light dark:bg-dark dark:text-light sm:flex-col">
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{time}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold mt-4 my-2 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2 sm:text-hidden">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Eric Chu | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full pb-16 mb-16 flex flex-col items-center justify-center overflow-hidden">
      {/* <Layout underConstruction={true} className="pt-16 "> */}
      <Layout className="pt-16 ">
          <AnimatedText
            text="Stay hungry! Stay foolish!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1 ">
            <FeaturedArticle
              title="My Internship Experiences as a Machine Learning Engineer"
              summary="What I Learned During the Internship Journey in Realtek(瑞昱半導體)."
              time="3 min read"
              link="https://medium.com/@williechu1125/my-internship-experiences-as-a-machine-learning-engineer-94ae6f54c95e"
              img={article1}
            />
            <FeaturedArticle
              title="Read Note | Enabling Failure-resilient Intermittently-powered Systems Without Runtime Checkpointing"
              summary="Read notes for Enabling Failure-resilient Intermittently-powered Systems Without Runtime Checkpointing"
              time="11 min read"
              link="https://hackmd.io/@Abel-Chu/Enabling-Failure-resilient-Intermittently-powered-Systems-Without-Runtime-Checkpointing"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title="My Internship Experiences as a Machine Learning Engineer"
              summary="What I Learned During the Internship Journey in Realtek(瑞昱半導體)."
              time="3 min read"
              link="https://medium.com/@williechu1125/my-internship-experiences-as-a-machine-learning-engineer-94ae6f54c95e"
              img={article1}
            />
            <Article
              title="Read Note | Enabling Failure-resilient Intermittently-powered Systems Without Runtime Checkpointing"
              summary="Read notes for Enabling Failure-resilient Intermittently-powered Systems Without Runtime Checkpointing"
              time="11 min read"
              link="https://hackmd.io/@Abel-Chu/Enabling-Failure-resilient-Intermittently-powered-Systems-Without-Runtime-Checkpointing"
              img={article2}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
