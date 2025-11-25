import React from 'react'
import Navbar from './Navbar'
import Stair from './Stair'
import TextReveal from './TextReveal'

const Home = () => {


       return (
              <>
                     <Stair />
                     <div className='h-[90vh] lg:h-screen overflow-hidden w-full bg-[#f2f2f2] text-gray-800  px-5 flex items-center justify-center font-[Font-1] '>
                            <div className="text tracking-tight leading-5 text-center">
                                   <TextReveal delay={1.2} animateOnScroll={false}>
                                          <h1 className='text-5xl font-black tracking-tighter'>STODISE.</h1>
                                   </TextReveal>
                                   <TextReveal delay={1.3} animateOnScroll={false}>
                                          <h1>Website is under Development</h1>
                                   </TextReveal>
                                   <TextReveal delay={1.4} animateOnScroll={false}>
                                          <h1>Launching Soon. </h1>
                                   </TextReveal>
                            </div>
                     </div>
              </>
       )
}

export default Home
