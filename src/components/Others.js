import React from "react";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Others = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Others</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Presentation of Special Thesis at the Engineering Technology Application Seminar - Implementation of a Machine Learning-Based Assistive Guide Device."
            time="2021"
            place="工程科技技術應用研討會發表專題論文- 基於機器學習實作輔助導盲裝置"
            info="------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
          />
          <Details
            type="NCU IM Special Project Competition - Honorable Mention"
            time="2021"
            place="中央資管系專題競賽-佳作"
            info="------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
          />
          <Details
            type="Symposium on Emerging Technologies in Information Management and Special Project Competition - 1st
            "
            time="2021"
            place="資訊管理前瞻技術研討會暨專題競賽-第一名"
            info="------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
          />
          <Details
            type="National Vocational Skills Cup Innovative Ideas Project Competition (Information Application Group, College Division) - 3rd"
            time="2021"
            place="全國技職盃創新創意專題實作競賽資訊應用群大專組-第三名"
            info="------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
          />

        </ul>
      </div>
    </div>
  );
};

export default Others;
