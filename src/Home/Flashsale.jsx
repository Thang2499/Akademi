import React, { useState, useEffect } from 'react'
import '../App.css'
import Flashsaleitems from '../componentChild/Flashsaleitems'
import productData from '../data/products'
const Flashsale = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        if (currentIndex < productData.flashSaleProduct.length - 5) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const now = new Date();
        const targetDate = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
        const intervalId = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;
            if (difference <= 0) {
                clearInterval(intervalId);
                return;
            }
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <>
            <div className='ml-32 mt-32 w-4/5'>

                <div className='flex'>
                    <div className='w-5 h-10 general-color-red rounded'></div>
                    <p className='red-text ml-4 pt-2 font-semibold'>Today's</p>
                </div>
                <div className='flex gap-x-10'>
                    <div className='font-semibold text-3xl mt-5'>Flash Sales</div>
                    <div className='flex gap-4 mt-5'>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Days</span>
                            <span className='text-4xl font-mono'> {String(timeLeft.days).padStart(2, '0')}</span>
                        </div>
                        <span className='text-3xl pt-4 red-text'>:</span>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Hours</span>
                            <span className='text-4xl font-mono'> {String(timeLeft.hours).padStart(2, '0')}</span>
                        </div>
                        <span className='text-3xl pt-4 red-text'>:</span>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Minutes</span>
                            <span className='text-4xl font-mono'> {String(timeLeft.minutes).padStart(2, '0')}</span>
                        </div>
                        <span className='text-3xl pt-4 red-text'>:</span>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Seconds</span>
                            <span className='text-4xl font-mono'> {String(timeLeft.seconds).padStart(2, '0')}</span>
                        </div>
                    </div>
                    <div className='float-right pl-44 ml-96 pt-2'>
                        <button className='grey-bg p-2 rounded-3xl' onClick={handlePrev}>Prev</button>
                        <button className='grey-bg p-2 rounded-3xl' onClick={handleNext}>Next</button>
                    </div>
                </div>
            </div>
            <div className='ml-8 mt-12 overflow-hidden'>
                <div className='overflow-hidden w-screen'>
                    <div
                        className='flex transition-transform duration-1000 ease-out '
                        style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                        {productData.flashSaleProduct.map((item) => (
                            <div key={item.id} className=' ml-12'>
                                <Flashsaleitems item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='flex justify-around mt-12'>
                <div className='text-center general-color-red text-white w-44 pt-2 pb-2 rounded hover-bt cursor-pointer '>View All Products</div>
            </div>
        </>
    )
}

export default Flashsale