import React, { useContext, useState, useEffect } from 'react'
import '../App.css'
import Wishlist from '../img/Wishlist.svg'
import card from '../img/Cart1.svg'
import lookup from '../img/lookup.png'
import { Link } from 'react-router-dom'
import context from '../Context/context'
const Header = () => {
    const {favorites} = useContext(context)
    const [favoriteCount, setFavoriteCount] = useState(favorites.length);
    useEffect(()=>{
        setFavoriteCount(favorites.length)
    },[favorites])
    return (
        <div className='flex justify-around pt-5'>
            <div className=' pt-2 font-black text-2xl'>
                <h1>Exclusive</h1>
            </div>
            <div className=' w-1/5  pt-2 '>
                <ul className=' list-none flex justify-between cursor-pointer  '>
                    <Link to='/' className='li-hover'>Home</Link>
                    <li className='li-hover'>Contact</li>
                    <li className='li-hover'>About</li>
                    <Link to='/signup' className='li-hover'> Sign Up</Link>
                </ul>
            </div>
            <div className='flex justify-between w-80'>
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <img src={lookup} alt="Search icon" className="h-5 w-5" />
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
                <div className='relative'>

                {favoriteCount > 0 ? 
                <div className='absolute left-5 px-1 w-4 text-center text-xs rounded-full text-white bg-red-600'>{favoriteCount}</div> :''}
                <Link to='/wishlist'><img className='w-9 h-9 cursor-pointer ' src={Wishlist} alt="" /></Link>
                </div>
             <Link to="/checkout">  <img className='w-7 h-7 mt-1 cursor-pointer ' src={card} alt="" /></Link> 
            </div>

        </div>
    )
}

export default Header