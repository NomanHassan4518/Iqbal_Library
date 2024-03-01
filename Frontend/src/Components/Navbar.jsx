import React, { useState } from 'react'
// import logo from '../DATA/LOGO.png'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaUserSecret } from "react-icons/fa";

const Navbar = () => {
    const [quranList, setQuranList] = useState(true)
    const [hadithList, setHadithList] = useState(false)
    const [hajjList, setHajjList] = useState(true)
    let auth = localStorage.getItem("user")
    let navigate = useNavigate();

    const handleQuranList = () => {
        if (quranList === true) {
            setQuranList(false)
        } else {
            setQuranList(true)
        }
    }

    const handleHadithList = () => {
        if (hadithList === true) {
            setHadithList(false)
        } else {
            setHadithList(true)
        }
    }

    const handleHajjList = () => {
        if (hajjList === true) {
            setHajjList(false)
        } else {
            setHajjList(true)
        }
    }

    const handleLogout =()=>{
        localStorage.clear();
        navigate("/")
    }
    return (
        <>
            <div className="">
                <div className=' border-b-2 border-red-600 shadow-lg'>
                    <div className='px-12 py-3  flex items-center justify-between '>
                        <div className='flex items-center space-x-10 '>
                            <Link to="/">
                                <img src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...GAqx5PkB7OwXs1M3EMoAJtlyAkhPtu8...Q+" alt="" className='w-[158px] h-[67px] object-cover' />
                            </Link>

                            <Link to="/" className='text-xl font-semibold'>Home</Link>
                            <Link to="/" className='text-xl font-semibold'>All Books</Link>
                            <Link to="/" className='text-xl font-semibold'>News</Link>
                            <Link to="/faq" className='text-xl font-semibold'>FAQ</Link>
                        </div>

                        <div className=''>
                            <input type="search" className='  focus:outline-none border border-black py-1 px-5 w-80 rounded-lg' placeholder='Search a book' />
                        </div>

                        <div className='flex items-center space-x-6'>
                            {
                                auth ?
                                    <Link to="/signup" className='text-xl font-semibold' onClick={handleLogout}>Logout</Link>
                                    :
                                    <div className='flex items-center space-x-6'>
                                        <Link to="" className='text-xl font-semibold'>Login</Link>
                                        <Link to="/signup" className='text-xl font-semibold'>SignUp</Link>
                                    </div>
                            }


                            <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black  focus:outline-none focus:ring-0 dark:bg-none  dark:focus:ring-0" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 20 20" className="md:w-4 xl:w-5 md:h-4 xl:h-5"><path d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z" transform="translate(-2 -2)" fill="currentColor" fillRule="evenodd"></path></svg>
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-black border-2 border-white rounded-full -top-[0.1rem] -right-[0.2rem] dark:border-gray-900" >0</div>
                            </button>
                        </div>

                    </div>
                </div>

                <div className="border-r-2 border-red-600 shadow-lg w-52 absolute left-0 py-4  ">
                    <div className='pb-6 border-b-2 border-green-600 px-3 space-y-7'>
                        <h1 className='text-2xl font-bold flex items-center space-x-3 '>
                            <span><BiSolidCategoryAlt /></span>
                            <span>Categories</span></h1>

                        <div className="my-4 pl-3">
                            <h1 to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer' onClick={handleQuranList}>
                                <span className='uppercase'>Quran kareem</span>
                                <span>
                                    {
                                        quranList ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                                    }
                                </span>

                            </h1>
                            <div className={`${quranList ? 'flex items-start flex-col space-y-2 mt-3 px-3 ' : 'hidden'}`}>
                                <Link to="" className="hover:text-blue-600">Quran Tafseer</Link>
                                <Link to="" className="hover:text-blue-600">Quran Translation</Link>
                                <Link to="" className="hover:text-blue-600">Books About Quran</Link>
                            </div>
                        </div>

                        <div className="my-4 pl-3">
                            <h1 to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer' onClick={handleHadithList}>
                                <span className='uppercase'>Hadith Books</span>
                                <span>
                                    {
                                        hadithList ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                                    }
                                </span>

                            </h1>
                            <div className={`${hadithList ? 'flex items-start flex-col space-y-2 mt-3 px-3 ' : 'hidden'}`}>
                                <Link to="" className="hover:text-blue-600">Sahih Bukhari</Link>
                                <Link to="" className="hover:text-blue-600">Sahih Muslim</Link>
                                <Link to="" className="hover:text-blue-600">Jami at Tirmidhi</Link>
                                <Link to="" className="hover:text-blue-600">Sunan Abu Dawood</Link>
                                <Link to="" className="hover:text-blue-600">Sunan An Nasai</Link>
                                <Link to="" className="hover:text-blue-600">Sunan Ibn Majah</Link>
                            </div>
                        </div>

                        <div className="my-4 pl-3">
                            <h1 to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer' onClick={handleHajjList}>
                                <span className='uppercase'>hajj & umrah guides</span>
                                <span>
                                    {
                                        hajjList ? <BiSolidUpArrow /> : <BiSolidDownArrow />
                                    }
                                </span>

                            </h1>
                            <div className={`${hajjList ? 'flex items-start flex-col space-y-2 mt-3 px-3 ' : 'hidden'}`}>
                                <Link to="" className="hover:text-blue-600">Hajj Info</Link>
                                <Link to="" className="hover:text-blue-600">Umrah Info</Link>

                            </div>
                        </div>

                        <div className="my-6 pl-3">
                            <Link to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer uppercase'>History Books</Link>
                        </div>

                        <div className="my-6 pl-3">
                            <Link to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer uppercase'>iqbaliyat</Link>
                        </div>

                        <div className="my-6 pl-3">
                            <Link to="" className='text-lg font-semibold flex items-center justify-between cursor-pointer uppercase'>urdu novels</Link>
                        </div>
                    </div>

                    <div className="my-4 px-3">
                        <h1 className='text-2xl font-bold flex d items-center space-x-6 '>
                            <span><FaUserSecret /></span>
                            <span>User</span>
                        </h1>

                        <div className="flex items-start flex-col space-y-4">
                            <input type="text" className='py-0.5 px-4 border border-blue-500 focus:outline-none w-full mt-4 rounded' placeholder='Enter Your Name' />
                            <input type="email" className='py-0.5 px-4 border border-blue-500 focus:outline-none w-full rounded' placeholder='Enter Your Email' />
                            <button className=' bg-blue-600 text-white font-semibold px-2 py-1 rounded w-20 hover:bg-purple-700'>Login</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
