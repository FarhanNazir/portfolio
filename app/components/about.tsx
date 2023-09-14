"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionView } from "../lib/hooks";

export default function About() {
  const { ref } = useSectionView("About");

  return (
    <motion.section
      ref={ref}
      className="  text-center leading-8 sm:mb-16 scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
        ornare sapien. Donec et turpis sollicitudin, venenatis massa non,
        aliquet quam. Pellentesque pulvinar mauris ac enim mattis, ut faucibus
        erat posuere. Pellentesque quis dolor vel velit condimentum imperdiet in
        ac neque. Nulla egestas vulputate luctus. Vestibulum ornare odio lectus,
        in lobortis mi pulvinar eget. Integer sit amet molestie est, laoreet
        vehicula massa. Curabitur a quam in lacus semper luctus non ac dui. Nam
        pellentesque purus nec odio euismod mattis. Donec scelerisque magna
        imperdiet justo gravida, ut tincidunt enim tempor. Aliquam semper nisi
        eget eros consequat, in ultrices augue iaculis. Duis.
      </p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet
        congue justo eget aliquet. Sed in ex nec elit mollis semper. Sed
        ultrices dui ac odio vulputate tincidunt. Duis accumsan, nibh id
        hendrerit interdum, mauris nibh congue orci, quis cursus tortor magna
        sit amet massa. Quisque in tellus ultrices, sollicitudin.
      </p>
    </motion.section>
  );
}
