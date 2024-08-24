import React from 'react'
import '../App.css'
import vector from '../img/Vector.png'
import card from '../img/Cart1.png'
import lookup from '../img/lookup.png'
const Header = () => {
    return (
        <div className='flex justify-around pt-5'>
            <div className=' pt-2 font-black text-2xl'>
                <h1>Exclusive</h1>
            </div>
            <div className=' w-1/5  pt-2 '>
                <ul className=' list-none flex justify-between '>
                    <li className='li-hover'>Home</li>
                    <li className='li-hover'>Contact</li>
                    <li className='li-hover'>About</li>
                    <li className='li-hover'>Sign Up</li>
                </ul>
            </div>
            <div className='flex justify-between w-80'>
                <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <img src={lookup} alt="Search icon" className="h-5 w-5" />
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
                <img className='w-5 h-6 pt-1' src={vector} alt="" />
                <img className='w-7 h-7' src={card} alt="" />
            </div>

        </div>
    )
}

export default Header