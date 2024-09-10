import React, { useState } from 'react'
import signup from '../img/login-signup.png'
import { Link } from 'react-router-dom'
import Body from '../Home/Body'
import { Result } from 'postcss'

const LogIn = () => {
  const [userName, setUserName] = useState("")
  const [passWord, setPassWord] = useState("")
  const [mess, setMess] = useState("")
  const logIn = async (e, userName, passWord) => {
    e.preventDefault();
    await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userName,
        password: passWord
      })
    })
      .then(async res => {
        if (res.ok) {
          console.log(res)
          var result = await res.json();
          setMess("Dang nhap thanh cong")         
        }
       
      })
      .catch(error => {
        setMess(error)
      });
  }
  return (
    <div className=' flex mt-4 border-t-2 w-full'>
      <div className='h-lvh w-1/2'>
        <img className='h-5/6 mt-16 w-full ' src={signup} alt="" />
      </div>
      <div className='mt-16 pl-48 w-2/4'>
        <form className='h-96 mt-20' action="">
          <h1 className='text-3xl font-medium '>Log in to Exclusive</h1>
          <p className='mt-4 text-sm'>Enter your details below</p><span>check mess:{mess}</span><br/>
          <input value={userName} onChange={(e) => { setUserName(e.target.value) }} className='focus:outline-none border-b-2 pt-8 w-96 pb-2' type="text" placeholder='Email or Phone Number' /><br />
          <input value={passWord} onChange={(e) => { setPassWord(e.target.value) }} className='focus:outline-none border-b-2 pt-8 w-96 pb-2' type="text" placeholder='Password' />
          <div className='mt-8 w-96 flex justify-between '>
            <button onClick={(e) => logIn(e, userName, passWord)} className='  h-12 text-center w-32 border rounded-md  shadow-sm general-color-red hover:bg-red-800 text-white '>Log in</button>
            <span className=' li-hover pt-4 red-text '>Forget Password?</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn