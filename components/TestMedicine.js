import React from 'react'

const TestMedicine = () => {
  return (
    <section className="w-full px-4 pt-6 pb-6 md:pt-28 md:pb-12 department-carousel strip-top b-strip">
        <div className="container mx-auto max-w-screen-xl">{/* <!-- container start --> */}
            <div className="section-title center-title text-center mb-8">
                <h3 className='capitalize text-4xl md:text-5xl text-[#2F2F2F] font-bold  mx-auto w-auto'>Test and Medicine</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="info-area rounded-lg bg-white shadow-md hover:shadow-lg transition px-6 py-10">
                    <h4 className='text-[#B64EC3] text-2xl font-medium mb-6'>
                    Diagnostic and Test</h4>
                    <div className="texts-area">
                        <ul className="list-disc list-outside pl-6 space-y-4 text-base text-black">
                            <li>Book a test according to the doctor's advice.</li> 
                            <li>We'll collect samples from your doorstep.</li>  
                            <li>Your report will be delivered within the shortest possible time through email or home delivery.</li>       
                        </ul>
                    </div>
                </div>
                <div className="info-area rounded-lg bg-white shadow-md hover:shadow-lg transition px-6 py-10">
                    <h4 className='text-[#B64EC3] text-2xl font-medium mb-6'>
                    Medicine Home Delivery</h4>
                    <div className="texts-area">
                        <ul className="list-disc list-outside pl-6 space-y-4 text-base text-black">
                            <li>Upload the picture of your prescription or search medicine and order online.</li> 
                            <li>One of our “A Grade Pharmacists” will confirm your order via call.</li>  
                            <li>Get your medicine delivered at your door within 18 to 48 hours.</li>       
                        </ul>
                    </div>
                </div>
            </div>

        </div>{/* <!-- container end --> */}
    </section>
  )
}

export default TestMedicine