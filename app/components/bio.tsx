"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Bio() {
  const { theme } = useTheme();
  return (
    <motion.section
      className="mb-20  text-center "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>Academic and Career Background</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                boxShadow: "none",
                border: "2px solid rgba(202, 138, 4, 1)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                background: "#facc15",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#facc15",
                boxShadow: "none",
                border: "4px solid rgba(202, 138, 4, 1)",
                color: "black",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-black">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 dark:text-black">
                {item.location}
              </p>
              <p className="!mt-4 !font-normal   text-gray-700 ">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
