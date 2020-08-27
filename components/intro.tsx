import { CMS_NAME } from "../lib/constants";
import React, { useState, useEffect } from "react"; // ignore red

const Intro = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  });

  return (
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
        <h1
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
          onClick={() => setCount(count + 1)}
        >
          Bienvenue!
        </h1>
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          The more I study, the more <b>insatiable</b> do I feel my genius for it to be. - Ada Lovelace
          {/* <a
            href="https://nextjs.org/"
            className="underline hover:text-success duration-200 transition-colors"
          >
            Next.js
          </a>{" "} */}
        </h4>
      </section>
  );
};

export default Intro;
