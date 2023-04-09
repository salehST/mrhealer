import React from "react";
import Head from "next/head";

import PrivacyPolicyInfo from "../../../components/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 privacy-policy bg-pattern">
        <div className="container mx-auto max-w-screen-xl">
          {/* <!-- container start --> */}
          <div className="section-title text-left mb-8">
            <h1 className="capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold w-auto">
              Privacy Policy
            </h1>
          </div>
          <PrivacyPolicyInfo />
        </div>
        {/* <!-- container end --> */}
      </section>
    </>
  );
};

export default PrivacyPolicy;
