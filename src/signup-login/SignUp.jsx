import React from 'react'
import signup from '../img/login-signup.png'
import icongoogle from '../img/Icon-Google.svg'
import { Link } from 'react-router-dom'
const SignUp = () => {
  return (
    <div className=' flex mt-4 border-t-2 w-full'>
        <div className='h-lvh w-1/2'>
            <img className='h-5/6 mt-16 w-full ' src={signup} alt="" />
        </div>
        <div className='mt-8 pl-48 w-2/4'>
            <form className='h-96 mt-20' action="">
                <h1 className='text-3xl font-medium '>Create an account</h1>
                <p className='mt-4 text-sm'>Enter your details below</p>
                <input className='focus:outline-none border-b-2 pt-8 w-96 pb-2' type="text" placeholder='Name' /> <br />
                <input className='focus:outline-none border-b-2 pt-8 w-96 pb-2' type="text" placeholder='Email or Phone Number' /><br />
                <input className='focus:outline-none border-b-2 pt-8 w-96 pb-2' type="text" placeholder='Password' />
                <div className='mt-8 '>
                    <button className=' h-12 text-center w-96 border rounded-md py-2 pl-9 pr-3 shadow-sm general-color-red hover:bg-red-800 text-white '>Create Account</button>
                  
                    <label className="relative block mt-4">
                    <button className='border rounded-md py-2 pl-9 pr-3 shadow-sm w-96 h-11 '>Sign up with Google</button>
                    <span className="absolute inset-y-0 left-24 flex items-center pl-2">
                        <img src={icongoogle} alt="icon Google" className="h-5 w-5" />
                    </span>
                </label>
                </div>
                <div className='text-center w-96 mt-8'>

                <span className='text-slate-500'>Already have account?</span> <Link to='/login' className='ml-4 li-hover '>Login</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp