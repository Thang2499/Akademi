import React from 'react'
import iconsend from '../img/iconsend.png'
import appstore from '../img/footer/appstore.png'
import GooglePlay from '../img/footer/GooglePlay.png'
import IconFacebook from '../img/footer/IconFacebook.svg'
import iconinstagram from '../img/footer/iconinstagram.svg'
import IconLinkedin from '../img/footer/IconLinkedin.svg'
import IconTwitter from '../img/footer/IconTwitter.svg'
import QrCode from '../img/footer/QrCode.png'
const Footer = () => {
    return (
        <div className='flex justify-around bg-black text-white h-80 mt-20'>
            <div className='text-sm pt-16 leading-10'>
                <h4 className='text-2xl font-bold'>Exclusive</h4>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <label className="relative block">
                    <span className="absolute inset-y-0 right-2 flex items-center pl-2">
                        <img src={iconsend} alt="Search icon" className="h-5 w-5" />
                    </span>
                    <input className="placeholder:italic bg-black border rounded-md py-2 pl-9 pr-3 shadow-sm " placeholder="Enter your email" type="text" name="search" />
                </label>
            </div>
            <div className='w-44 text-sm pt-16 leading-8'>
                <h4 className='text-2xl font-bold'>Support</h4>
                <p className='leading-none mt-4'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>Get 10% off your first order</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className='text-sm pt-16 leading-9'>
                <h4 className='text-2xl font-bold'>Account</h4>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className='text-sm pt-16 leading-9'>
                <h4 className='text-2xl font-bold'>Quick Link</h4>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className='text-sm pt-16 leading-10'>
                <h4 className='text-2xl font-bold'>Download App</h4>
                <p>Save $3 with App New User Only</p>
                <div className='flex'>
                    <img src={QrCode} alt="" />
                    <div className='ml-4 '>
                        <img src={GooglePlay} alt="" />
                        <img src={appstore} alt="" />
                    </div>
                </div>
                    <div className='flex justify-between mt-4'>
                        <img className='w-8 h-6' src={IconFacebook} alt="" />
                        <img className='w-8 h-6' src={IconTwitter} alt="" />
                        <img className='w-8 h-6' src={iconinstagram} alt="" />
                        <img className='w-8 h-6' src={IconLinkedin} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Footer