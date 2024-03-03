import React from 'react'
import { FaFacebook ,FaMobileAlt,FaQuestion  } from "react-icons/fa";
import { MdRoundaboutRight,MdAddLocationAlt,MdMarkEmailUnread ,MdOutlinePrivacyTip    } from "react-icons/md";
import { Link } from 'react-router-dom';
import { LuFileTerminal } from "react-icons/lu";
import { GiReturnArrow } from "react-icons/gi";

const Footer = () => {
    return (
        <div className='lg:px-16 px-4 py-20 border-b grid lg:grid-cols-4 gap-8 grid-cols-1 md:grid-cols-2'>
             <div className='pr-12'>
                <h1 className='text-3xl font-bold mb-7'>Contact</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-green-600'><MdAddLocationAlt  /></span>
                    <Link to="/about">Street No#51 Sector G-10 Islamabad</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><MdMarkEmailUnread   /></span>
                    <Link to="/about">iqballibrary55@gmail.com</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-pink-600'><FaMobileAlt    /></span>
                    <Link to="/about">+923195586305</Link>
                </h1>
            </div>
            <div >
                <h1 className='text-3xl font-bold mb-7'>Social</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-blue-600'><FaFacebook /></span>
                    <Link to="/" className=''>FaceBook</Link>
                </h1>
                
            </div>
           
            <div >
                <h1 className='text-3xl font-bold mb-7'>About</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><MdRoundaboutRight  /></span>
                    <Link to="/about">About Us</Link>
                </h1>
            </div>
            
            <div >
                <h1 className='text-3xl font-bold mb-7'>Our Information</h1>
                <h1 className='flex items-center mt-4 space-x-4 text-xl'>
                    <span className='text-3xl text-purple-600'><MdOutlinePrivacyTip   /></span>
                    <Link to="/about">Privacy policy</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-lime-600'><LuFileTerminal   /></span>
                    <Link to="/about">Terms & conditions</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-orange-600'><GiReturnArrow    /></span>
                    <Link to="/about">Returns & Refunds Policy</Link>
                </h1>
                <h1 className='flex items-center mt-6 space-x-4 text-xl'>
                    <span className='text-3xl text-red-600'><FaQuestion     /></span>
                    <Link to="/about">FAQ & Help</Link>
                </h1>
            </div>
        </div>
    )
}

export default Footer