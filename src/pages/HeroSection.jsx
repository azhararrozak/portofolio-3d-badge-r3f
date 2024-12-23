import React from 'react'
import Badge from '../components/Badge'
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen'>
        <div className='w-full md:w-1/2 order-2 md:order-1'>
            <div className='flex flex-col text-white h-full justify-center text-center items-center p-4 md:p-0'>
                <h1 className='text-3xl md:text-6xl font-bold'>
                    Hello, I'm <ReactTyped className='text-blue-500' strings={["Azhar Arrozak"]} typeSpeed={120} loop={true}/>
                </h1>
                <p className='text-lg md:text-2xl'>I'm a full-stack developer</p>
            </div>
        </div>
        <div className='w-full md:w-1/2 order-1 md:order-2 z-10 mt-8 md:mt-0'>
            <Badge />
        </div>
    </div>
  )
}

export default HeroSection
