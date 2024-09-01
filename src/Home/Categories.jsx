import React from 'react'
import '../App.css'
import smartphone from '../img/categories/smartphone.svg'
import gaming from '../img/categories/gaming.svg'
import headphone from '../img/categories/headphone.svg'
import screen from '../img/categories/screen.svg'
import camera from '../img/categories/camera.svg'
import smartwatch from '../img/categories/smartwatch.svg'
const Categories = () => {
    return (
        <>
            <div className='ml-28 mt-20 width-cate border-t-2 '>
                <div className='flex mt-8'>
                    <div className='w-5 h-10 general-color-red rounded'></div>
                    <p className='red-text ml-4 pt-2 font-semibold'>Categories</p>
                </div>
                <div className='flex gap-x-10 '>
                    <div className='font-semibold text-3xl mt-5'>Browse By Category</div>
                </div>
            </div>
            <div className='flex ml-24 mt-8 mr-24 justify-around border-b-2 pb-24 cursor-pointer '>
                <div className='w-44 text-center border-solid border-2 h-36 pt-8 category '>
                    <img className='h-20 w-32 pl-12 bg-none' src={smartphone} alt="" />
                    <p>Phones</p>
                </div>
                <div className='w-44 text-center border-solid border-2 h-36 pt-8 category '>
                    <img className='h-20 w-32 pl-12 bg-none' src={screen} alt="" />
                    <p>Computers</p>
                </div>
                <div className='w-44 text-center border-solid border-2 h-36 pt-8 category '>
                    <img className='h-20 w-32 pl-12 bg-none' src={smartwatch} alt="" />
                    <p>SmartWatch</p>
                </div>
                <div className='w-44 text-center border-solid border-2 h-36 pt-8 category '>
                    <img className='h-20 w-32 pl-12 bg-none' src={camera} alt="" />
                    <p>Camera</p>
                </div>
                <div className='w-44 text-center border-solid border-2 h-36 pt-8 category '>
                    <img className='h-20 w-32 pl-12 bg-none' src={headphone} alt="" />
                    <p>HeadPhones</p>
                </div>
                <div className='w-44 text-center border-solid border-2 h-36 pt-8 category '>
                    <img className='h-20 w-32 pl-12 bg-none' src={gaming} alt="" />
                    <p>Gaming</p>
                </div>
            </div>
        </>
    )
}

export default Categories