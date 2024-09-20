import React, { useEffect, useState } from 'react'
import signup from '../img/login-signup.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
const LogIn = () => {
  const [email, setEmail] = useState("")
  const [passWord, setPassWord] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect ( () => {
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        navigate('/')
        toast.success("Đăng nhập thành công")
      }
    })
    return()=> unsubscribe()
  },[])
  
  const handleLogIn = async (e) =>{
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(auth,email,passWord)
      toast.success("Đăng nhập thành công")
      navigate("/")
    }
    catch(err){
      setError(toast.error("Kiểm tra lại email và password"))
    }
  }
  return (
    <div className=' flex mt-4 border-t-2 w-full'>
      <div className='h-lvh w-1/2'>
        <img className='h-5/6 mt-16 w-full ' src={signup} alt="" />
      </div>
      <div className='mt-16 pl-48 w-2/4'>
        <form className='h-96 mt-20' onSubmit={handleLogIn}>
          <h1 className='text-3xl font-medium '>Log in to Exclusive</h1>
          <p className='mt-4 text-sm'>Enter your details below</p><br/>
          <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='focus:outline-none border-b-2 pt-8 w-96 pb-2'  placeholder='Email or Phone Number' /><br />
          <input type="password" value={passWord} onChange={(e) => { setPassWord(e.target.value) }} className='focus:outline-none border-b-2 pt-8 w-96 pb-2' placeholder='Password' />
          <div className='mt-8 w-96 flex justify-between '>
            <button className='  h-12 text-center w-32 border rounded-md  shadow-sm general-color-red hover:bg-red-800 text-white '>Log in</button>
            <span className=' li-hover pt-4 red-text '>Forget Password?</span>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
/>  
    </div>
  )
}

export default LogIn