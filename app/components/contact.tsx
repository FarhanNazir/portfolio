"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../actions/sendEmail";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20  text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-3">
        Please contact me directly at{" "}
        <a href="mailto:farhannazir2660@gmail.com" className="underline">
          farhannazir2660@gmail.com
        </a>{" "}
        or through this form
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email send successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          required
          maxLength={5000}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Your message"
          name="message"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
