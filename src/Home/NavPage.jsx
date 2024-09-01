import React from 'react'
import banner from '../img/Frame 560.png'
import Flashsale from './Flashsale'
const NavPage = () => {
  return (
    <div className='flex mt-8 br '>
        <div className=' ml-32 w-1/6 bl pt-10 cursor-pointer '>
            <ul className='leading-10  w-32'>
                <li className='li-hover' >Woman’s Fashion</li>
                <li className='li-hover w-28' >Men’s Fashion</li>
                <li className='li-hover w-20'>Electronics</li>
                <li className='li-hover'>Home & Lifestyle</li>
                <li className='li-hover w-16'>Medicine</li>
                <li className='li-hover w-4/5'>Baby’s & Toys</li>
                <li className='li-hover w-11/12'>Groceries & Pets</li>
                <li className='li-hover w-11/12'>Health & Beauty</li>
            </ul>
        </div>
        <div className='ml-2 pt-10 pl-16'>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default NavPage