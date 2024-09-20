import React, { useContext, useState, useEffect,useRef } from 'react';
import '../App.css';
import Wishlist from '../img/Wishlist.svg';
import card from '../img/Cart1.svg';
import lookup from '../img/lookup.png';
import { Link } from 'react-router-dom';
import context from '../Context/context';
import { auth } from '../firebase/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import productData from '../data/products'
import useDebounce from '../hook/useDebounce';
const Header = () => {
    const { favorites, orderTemplate } = useContext(context);
    const [favoriteCount, setFavoriteCount] = useState(favorites.length);
    const [orderCount, setOrderCount] = useState(orderTemplate.orderItems);
    const [user, setUser] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const notify = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 1000,  // Tự động đóng sau 2 giây
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };
    const searchRef = useRef(null);
    const debouncedSearchTerm = useDebounce(searchTerm,2000)
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setShowDropdown(true); 
    };

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setShowDropdown(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const filteredProducts = debouncedSearchTerm
    ? productData.products.filter(product =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        setFavoriteCount(favorites.length);
        setOrderCount(orderTemplate.orderItems.length);
    }, [favorites, orderTemplate]);

    useEffect(() => {
       
        if (favorites.length > favoriteCount) {
            notify("Đã thêm vào danh sách yêu thích!");
        }

        
        if (orderTemplate.orderItems.length > orderCount) {
            notify("Đã thêm vào giỏ hàng!");
        }
    }, [favorites, orderTemplate]);
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Sử dụng 'smooth' để tạo hiệu ứng cuộn mượt
        });
      };
    return (
        <div className='flex justify-around pt-5 sticky top-0 bg-white z-10 scroll-smooth'>
            <ToastContainer />
            <div className='pt-2 font-black text-2xl'>
                <Link to='/'><h1>Exclusive</h1></Link>
            </div>
            <div className='w-1/5 pt-2 '>
                <ul className='list-none flex justify-between cursor-pointer'>
                    <Link to='/' onClick={scrollToTop} className='li-hover'>Home</Link>
                    <li className='li-hover'>Contact</li>
                    <li className='li-hover'>About</li>
                    <Link to='/signup' className='li-hover'>Sign Up</Link>
                </ul>
            </div>
            <div className='flex w-96' >
                <label className="relative block" ref={searchRef}>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <img src={lookup} alt="Search icon" className="h-5 w-5" />
                    </span>
                    <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search for anything..."
                        type="text"
                        name="search"
                        value={searchTerm}
                        onChange={(e)=>handleSearch(e)} />
                    {showDropdown &&  (
                    <ul className='absolute bg-slate-100 border border-gray-200 rounded-md  mt-1 z-10'>
                        {filteredProducts.length > 0 ? filteredProducts.map(item => (
                            <Link to={`/productDetail/${item.id}`}><li className='flex p-1 hover:bg-slate-300 w-52 rounded-md' key={item.id}>
                                <img className='w-6' src={item.image} alt={item.productName} />
                                <p className='text-xs'>{item.productName}</p>
                            </li></Link>
                        )) : (
                            <li className='p-2 text-sm text-gray-500 w-52 text-center'>No results found</li>
                        )}
                    </ul>
                )}
                </label>
                <div className='relative'>
                    {favoriteCount > 0 ?
                        <div className='absolute left-5 px-1 w-4 text-center text-xs rounded-full text-white bg-red-600'>{favoriteCount}</div> : ''}
                    <Link to='/wishlist'><img className='w-9 h-9 cursor-pointer' src={Wishlist} alt="" /></Link>
                </div>
                <div className='relative'>
                    {orderCount > 0 ?
                        <div className='absolute left-5 px-1 w-4 text-center text-xs rounded-full text-white bg-red-600'>{orderCount}</div> : ''}
                    <Link to="/checkout"><img className='w-7 h-7 mt-1 cursor-pointer' src={card} alt="" /></Link>
                </div>
                {user ? (
                    <div className='relative mt-2'>
                        <span onClick={toggleMenu} className='cursor-pointer text-sm ml-1'>
                            {user.email || "User"}
                        </span>
                        {showMenu && (
                            <div className='absolute mt-2  w-32 bg-white rounded-lg shadow-xl'>
                                <Link to='/profile' className='block px-4 py-2 text-gray-800 hover:bg-gray-200'>Profile</Link>
                                <button onClick={handleLogout} className='block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200'>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : ""}
            </div>
        </div>
    );
};

export default Header;
