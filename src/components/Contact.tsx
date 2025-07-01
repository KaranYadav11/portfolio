"use client";

import React from "react";
import { montserrat } from "@/utils/fonts";
import Title from "./ui/Title";
import { Link } from "@radix-ui/themes";

const Contact = () => {
  return (
    <div className="w-full px-64 max-[1285px]:px-52 max-lg:px-4 max-sm:px-2 flex flex-col items-center mt-4 pb-16">
      <Title title="Get in Touch" />

      <div
        className={`w-full flex flex-col items-center justify-center text-center gap-3 mt-6 px-36 max-sm:px-4 ${montserrat}`}
      >
        <p className="mt-4 text-sm text-white max-w-2xl mx-auto">
          Want to chat? Just shoot me an email at{" "}
          <Link
            href="mailto:111yadavkaran@gmail.com"
            className="text-blue-500 underline cursor-none underline-offset-4"
          >
            111yadavkaran@gmail.com
          </Link>
          , and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </div>
  );
};

export default Contact;
