import React from 'react'
import WorkImg from '..//assets/workImg.jpeg'
import realEstate from '..//assets/realestate.jpg'

function Work() {
    return (
        <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='py-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>WORK</p>
                    <p className='py-6'>// Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effect */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Js Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://ornate-churros-3a985b.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/OfficialAlok/AICT">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </div>
    )
}

export default Work