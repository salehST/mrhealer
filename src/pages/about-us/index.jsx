import React from "react";
import AboutUsInfo from "../../../components/AboutUs";
import AboutUsMore from "../../../components/AboutUs/more-info";
import Head from "next/head";
const AboutUs = () => {
  <style jsx>{``}</style>;
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <AboutUsInfo />
      <AboutUsMore />
    </>
  );
};

export default AboutUs;
