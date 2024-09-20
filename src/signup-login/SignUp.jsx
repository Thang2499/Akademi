import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth ,googleProvider} from '../firebase/firebase';
import signup from '../img/login-signup.png';
import icongoogle from '../img/Icon-Google.svg';
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        // after user changed stat ( from nothing to signin)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/');
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Tạo tài khoản thành công!");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignUp = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            setSuccess("Đăng nhập bằng Google thành công!");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='flex mt-4 border-t-2 w-full'>
            <div className='h-lvh w-1/2'>
                <img className='h-5/6 mt-16 w-full' src={signup} alt="Signup illustration" />
            </div>
            <div className='mt-8 pl-48 w-2/4'>
                <form className='h-96 mt-20' onSubmit={handleSignUp}>
                    <h1 className='text-3xl font-medium'>Create an account</h1>
                    <p className='mt-4 text-sm'>Enter your details below</p>
                    {error && <p className='text-red-500'>{error}</p>}
                    {success && <p className='text-green-500'>{success}</p>}

                    <input
                        className='focus:outline-none border-b-2 pt-8 w-96 pb-2'
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> <br />
                    <input
                        className='focus:outline-none border-b-2 pt-8 w-96 pb-2'
                        type="email"
                        placeholder='Email or Phone Number'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br />
                    <input
                        className='focus:outline-none border-b-2 pt-8 w-96 pb-2'
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <div className='mt-8'>
                        <button
                            type="submit"
                            className='h-12 text-center w-96 border rounded-md py-2 pl-9 pr-3 shadow-sm general-color-red hover:bg-red-800 text-white'>
                            Create Account
                        </button>

                        <label className="relative block mt-4">
                            <button
                                type="button"
                                onClick={handleGoogleSignUp}
                                className='border rounded-md py-2 pl-9 pr-3 shadow-sm w-96 h-11'>
                                Sign up with Google
                            </button>
                            <span className="absolute inset-y-0 left-24 flex items-center pl-2">
                                <img src={icongoogle} alt="icon Google" className="h-5 w-5" />
                            </span>
                        </label>
                    </div>

                    <div className='text-center w-96 mt-8'>
                        <span className='text-slate-500'>Already have an account?</span>
                        <Link to='/login' className='ml-4 li-hover'>Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
