import React from 'react'
import Gucci from '../img/Feature/Gucci.png'
import playstation from '../img/Feature/playstation.png'
import speaker from '../img/Feature/speaker.png'
import wearinghat from '../img/Feature/wearinghat.png'
import car from '../img/Feature/car.png'
import custumer from '../img/Feature/custumer.png'
import protect from '../img/Feature/protect.png'
const Featured = () => {
    return (
        <div className='ml-28 mt-20 width-cate border-t-2 '>
            <div className='flex mt-8'>
                <div className='w-5 h-10 general-color-red rounded'></div>
                <p className='red-text ml-4 pt-2 font-semibold'>Featured</p>
            </div>
            <div className='flex gap-x-10 '>
                <div className='font-semibold text-3xl mt-5'>New Arrival</div>
            </div>
            <div className='flex mt-8'>
                <div className='relative bg-black'>
                    <img className='pl-20 pt-12' src={playstation} alt="" />
                    <div className='absolute bottom-12 text-white w-64 ml-8 flex flex-col justify-between h-32'>
                        <h1 className='text-2xl font-bold'>PlayStation 5</h1>
                        <p className='leading-none text-sm'>Black and White version of the PS5 coming out on sale.</p>
                        <span className='font-medium hover:border-b-2 w-20 text-center'>Shop Now</span>
                    </div>
                </div>
                <div className='ml-8 w-3/5'>

                    <div className='relative bg-black'>
                        <img className='pl-96 h-60  ' src={wearinghat} alt="" />
                        <div className='absolute bottom-8 text-white w-2/4 ml-8  h-32 '>
                            <h1 className='text-2xl font-bold mt-4'> Women’s Collections</h1>
                            <p className='w-56 mt-4 text-sm'>Featured woman collections that give you another vibe.</p>
                            <span className='font-medium hover:border-b-2 w-20 text-center'>Shop Now</span>
                        </div>
                    </div>

                    <div className='flex mt-4 h-64'>
                        <div className='relative bg-black w-3/5'>
                            <img className=' pl-36 pt-4' src={speaker} alt="" />
                            <div className='absolute bottom-4 text-white w-64 ml-8 '>
                                <h1 className='text-2xl font-bold'> Speakers</h1>
                                <p className='text-xs tracking-widest'>Amazon wireless speakers</p>
                                <span className='font-medium hover:border-b-2 w-20 text-center'>Shop Now</span>
                            </div>
                        </div>
                        <div className='relative bg-black ml-4 w-3/5'>
                            <img className=' pl-32 pt-4 ' src={Gucci} alt="" />
                            <div className='absolute bottom-4 text-white w-64 ml-8 '>
                                <h1 className='text-2xl font-bold'>Perfume</h1>
                                <p className='text-xs tracking-widest'>GUCCI INTENSE OUD EDP</p>
                                <span className='font-medium hover:border-b-2 w-20 text-center'>Shop Now</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mt-24 w-3/4 ml-44'>
                <div className=' flex flex-col items-center'>
                    <img className='w-12 h-12' src={car} alt="" />
                    <div className='text-center mt-4'>
                        <h1 className='font-bold'>FREE AND FAST DELIVERY</h1>
                        <p>Free delivery for all orders over $140</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <img className='w-12 h-12' src={custumer} alt="" />
                        <div className='text-center mt-4'>
                            <h1 className='font-bold'>24/7 CUSTOMER SERVICE</h1>
                            <p>Friendly 24/7 customer support</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center'>
                        <img className='w-12 h-12' src={protect} alt="" />
                        <div className='text-center mt-4'>
                            <h1 className='font-bold'>MONEY BACK GUARANTEE</h1>
                            <p>We reurn money within 30 days</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured