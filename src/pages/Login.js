import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <section id='login'>
            <div className='mx-auto container p-4'>
                <div className=' bg-white p-2 w-full max-w-sm mx-auto rounded'>
                    <div className="flex items-center justify-center h-full text-2xl font-semibold text-green-600 font-bold">
                        LOGIN FORM
                    </div>

                    <form className='pt-6'>
                        <div className='grid'>
                            <label>Email : </label>
                            <div className='bg-slate-100 p-2 rounded'>
                                <input type='email' placeholder='enter email' className='w-full h-full outline-none bg-transparent' />
                            </div>
                        </div>
                        <div>
                            <label>Password : </label>
                            <div className='bg-slate-100 p-2 flex rounded'>
                                <input type={showPassword ? "text" : "password"} placeholder='enter email' className='w-full h-full outline-none bg-transparent' />
                                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                                    {showPassword ?
                                        (
                                            <span>
                                                <FaEyeSlash/>
                                            </span>
                                        )
                                        :
                                        (
                                            <span>
                                                <FaEye/>
                                            </span>
                                        )
                                    }
                                </div>
                            </div>
                            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-green-600'>
                                Forgot passowrd
                            </Link>
                        </div>

                        <button className='bg-green-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-4'>Login</button>
                    </form>
                    <p className='my-4 text-center'>Don't have account ? <Link to={"/sign-up"} className='text-green-500 underline hover:text-green-700'>Sing Up</Link></p>
                </div>
            </div>
        </section>
    )
}

export default Login
