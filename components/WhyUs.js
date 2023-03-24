import React from 'react'
import Image from 'next/image'
const WhyUs = () => {
  return (
    <section id='service' className="w-full p-4 md:py-20 bg-pattern b-strip">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
            <div className="section-title mb-8">
                <h3 className='capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold w-auto'>Why us</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="text-[#2F2F2F] text-xl font-normal w-full md:w-1/2">
                    <ul className="list-disc list-outside pl-6 space-y-6">
                        <li>Affordable treatment saving time, money and hassle.</li> 
                        <li>Anyone, wherever, at any time, may have fast, secure access to the expert medical care they require from a team of recognized doctors.</li>  
                        <li>The ability to order medicines and have them delivered at home, tests and diagnostics, file transfers, as well as prescription medications.</li>         
                        <li>Simple to use for protecting the health of the whole community.</li>     
                        <li>Lifetime record keeping facility for digital prescription and consultation history.</li>       
                    </ul>
                </div>
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <div className="play-btn flex items-center justify-center relative z-[1] ">
                        <a href="" className='underline text-black hover:text-gray-900 transition-colors  flex items-center justify-center'>Watch The Video <Image width={110} height={110} className='ml-4' src="/img/play-btn.svg" alt="icon" /></a> 
                    </div>
                </div>
            </div>
        </div>{/* <!-- container end --> */}
    </section>
  )
}

export default WhyUs