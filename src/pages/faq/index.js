import React from "react";
import Head from "next/head";

import FaqDetail from "../../../components/FaqDetail";

const Faq = () => {
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <section className="w-full p-4 md:py-20 faq bg-pattern">
        <div className="container mx-auto max-w-screen-xl">
          {/* <!-- container start --> */}
          <div className="section-title center-title text-center mb-8">
            <h3 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold  mx-auto w-auto">
              Frequently Asked Questions
            </h3>
          </div>
          <FaqDetail />
        </div>
      </section>
    </>
  );
};

export default Faq;
