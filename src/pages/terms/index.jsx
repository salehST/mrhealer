import React from 'react'

import Head from 'next/head'
import TermsCondition from '../../../components/Terms'
const Terms = () => {
  return (
    <>
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-8 terms-conditions bg-pattern ">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
          <div className="section-title text-left mb-8">
            <h1 className='capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold w-auto'>Terms & Conditions</h1>
          </div>

          <TermsCondition />
        </div>
      </section>
    </>
  )
}

export default Terms