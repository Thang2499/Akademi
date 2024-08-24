import React from 'react'
import banner from '../img/Frame 560.png'
const NavPage = () => {
  return (
    <div className='flex mt-8 br '>
        <div className=' ml-32 w-1/5 bl pt-10'>
            <ul className='leading-10'>
                <li>Woman’s Fashion</li>
                <li>Men’s Fashion</li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
        <div className='ml-2 pt-10 pl-10'>
            <img src={banner} alt="" />
        </div>
    </div>
  )
}

export default NavPage