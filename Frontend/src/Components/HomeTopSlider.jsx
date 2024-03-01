import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HomeTopSlider = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className=''>
            <Carousel
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                responsive={responsive}
                removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
                className='overflow-hidden'
                >
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGgZstTBwtt237yB1cTudAJ6d57mgMjv0qHM-kilSSMYNPIQuI" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Quram Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2uV-Rnyqo_wNpIYDi9j5qk0H6TzfAoe8CA&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Hadith Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKa1yTQh48ZhWOxfAqvTsHVxySMtMAlVMj8w&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>History Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIxpsRcC9ixllUOUc5se8YwYYMebv77dQr9g&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Hajj & Umrah</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2Qoc3FaMF_7LSY_UCjwb94ntoUI5vv-XBg&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Iqbal Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZS-_OUfT3kfvMEWuHvrVujTb7Yr_zXEklgFXXcteMRXLER6EyWWOlPWMgEWc5S6nnaU&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>Novels Section</span>
                </div>
                <div className='bg-[#7cfc00] px-5 py-4 rounded space-x-4 flex items-center'>
                    <span className='text-2xl font-bold text-black'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVftPJt4Tp48wRGfZTjlTx2gheuCpL4Vf9HA&usqp=CAU" className='w-[70px] h-[70px] object-cover rounded-full' alt="" />
                    </span>
                    <span className='text-lg font-semibold uppercase'>News Section</span>
                </div>


            </Carousel>;
        </div>
    )
}

export default HomeTopSlider
