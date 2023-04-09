import React from 'react'

import Slider from '../../../components/Home/Slider';
import WhyUs from "../../../components/Home/WhyUs";
import OfferTab from "../../../components/Home/OfferTab";
import Carousel from "../../../components/Home/Carousel";
import DrBooking from "../../../components/Home/DrBooking";
import TestMedicine from "../../../components/Home/TestMedicine";
import CustomerSupport from "../../../components/Home/CustomerSupport";
import FaceBook from "../../../components/Home/FaceBook";
import Faq from "../../../components/Home/Faq";

const LandingPage = () => {
  return (
    <>
        <Slider/>
        <WhyUs />
        <OfferTab  />
        <Carousel />
        <DrBooking />
        <TestMedicine />
        <CustomerSupport />
        <FaceBook />
        <Faq />
    </>
  )
}

export default LandingPage