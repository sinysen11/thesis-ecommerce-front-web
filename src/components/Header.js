import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='h-16 shadow-md bg-white'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>
                <div className=''>
                    <Link to={"/"}>
                        <Logo w={160} h={80} />
                    </Link>
                </div>
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-3'>
                    <input type='text' placeholder='search products...' className='w-full outline-none' />
                    <div className='text-lg min-w-[50px] h-8 bg-green-600 flex items-center justify-center rounded-r-full text-white cursor-pointer'>
                        <GrSearch />
                    </div>
                </div>
                <div className='flex items-center gap-7'>
                    <div className='text-3xl cursor-pointer'>
                        <FaRegUserCircle />
                    </div>
                    <div className='text-3xl cursor-pointer relative'>
                        <span><FaShoppingCart /></span>
                        <div className='bg-green-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                            <p className='text-sm'>0</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"}>
                            <button className='px-3 py-1 rounded-full bg-green-600 text-white flex items-center space-x-2'>
                                <IoMdLogIn />
                                <span>Login</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>


    )
}

export default Header
