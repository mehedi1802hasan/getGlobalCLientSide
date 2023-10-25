import React from 'react';
import { FaEarthAsia } from 'react-icons/fa6';
import { GiCrossedBones } from 'react-icons/gi';
import { PiHandshakeThin } from 'react-icons/pi';
import { PiDotOutlineFill } from 'react-icons/pi';


const BannerPart = () => {
    return (
        <div className=' p-2 mt-10 mb-10'>
            <h3 className='bg-[#F4E4AF] p-1 w-36 rounded-3xl flex items-center '><span className='text-2xl font-bold '><PiDotOutlineFill/></span> Comming soon</h3>
            <div className='md:flex  gap-16 mt-8 '>
                <div>
                    <h3 className='text-3xl font-bold'>Unlock Global Oppurtunity</h3>
                    <p className='mt-3 mb-6'>Venturing  beyond borders? Drive into a curated list of jobs that  come with visa and relocation support.Explore , apply , and kickstart your global journey with confidence</p>
                    <div className='p-3 bg-[#F4EFF7] rounded-lg  '>
                        <h3 className='flex items-center gap-2 text-md font-bold'>
                          <span className='text-blue-300 text-2xl'><FaEarthAsia></FaEarthAsia></span>  Global Jobs, Handpicked for You
                        </h3>
                        <p className='my-2'>Every job listing we showcase is handpicked , offering visa and reloation assistance, Making your international job hunt seamless
                        </p></div>
                    <div className='p-3 bg-[#F4EFF7] my-5 rounded-lg'><h3 className='flex items-center gap-2 text-md font-bold'> <span className='text-xl'><GiCrossedBones></GiCrossedBones></span>Navigate with Insight</h3>
                        <p className='my-2'>Get Comprehensive insights about each counetry , ensuring your'e well prepared for your new journey</p></div>
                    <div className='p-3 bg-[#F4EFF7] rounded-lg'><h3 className='flex items-center gap-2 text-md font-bold'><span className='text-2xl text-yellow-500 '><PiHandshakeThin></PiHandshakeThin></span> More Than Just job Listings
                    </h3>
                        <p className='my-2'>Join our vibrant community to seek referralas ewxpoler our payu parity calculator and understand your p potential tak home with our tax calculator</p></div>
                </div>
                <div className='mt-12'>
                    <img src="https://i.ibb.co/FK3pqBC/Frame-48.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerPart;