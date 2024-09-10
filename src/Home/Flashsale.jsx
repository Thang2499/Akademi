import React, { useContext, useState } from 'react'
import '../App.css'
import context from '../Context/context'
import Flashsaleitems from '../componentChild/Flashsaleitems'
import productData from '../data/products'
const Flashsale = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const filteredProducts = productData.getProducts(8)

    const handleNext = () => {
        if (currentIndex < filteredProducts.length - 5) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

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
                            <span className='text-4xl font-mono'>03</span>
                        </div>
                        <span className='text-3xl pt-4 red-text'>:</span>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Hours</span>
                            <span className='text-4xl font-mono'>23</span>
                        </div>
                        <span className='text-3xl pt-4 red-text'>:</span>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Minutes</span>
                            <span className='text-4xl font-mono'>19</span>
                        </div>
                        <span className='text-3xl pt-4 red-text'>:</span>
                        <div className=' flex flex-col'>
                            <span className='text-xs'>Seconds</span>
                            <span className='text-4xl font-mono'>56</span>
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
                        style={{ transform: `translateX(-${currentIndex * 20}%)` }}
                    >
                        {filteredProducts.map((item) => (
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