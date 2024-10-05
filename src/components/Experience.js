import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full sm:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Machine Learning Intern"
            company="Realtek"
            companyLink="https://www.realtek.com/"
            time="Summer 2024"
            address="Hsinchu, Taiwan"
            work="At Realtek, I research and design the most economical and powerful methods for searching and summarizing data.
            I utilize GPT-4 in combination with Retrieval Augmented Generation (RAG) technologies to achieve optimal results.
            Using the LangChain framework, I create a VectorDB, building a database that includes data titles, and employ GPT-4
            to predict the information I need. Compared to the previous VectorDB at Realtek, I have achieved an 88% reduction in
            memory usage and an 85% speedup in database construction speed."
          />
          {/* <Details
            position="123"
            company="123"
            companyLink="123"
            time="124"
            address="H123"
            work="At Realtek, I research and design the most economic and powerful method to search and summary data.
             I utilize GPT4o combine Retrieval Augmented Generation technologies(RAG) to achieve the best result.
             I use LangChain framework to create VectorDB and I create data base with title of data and use GPT4o to predict the data I need.
             Compare to the VectorDB in Realtek before, I save more than 50% space, and 30%+ speedup"
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
