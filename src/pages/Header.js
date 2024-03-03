import React from 'react'
// import Image from 'next/image'
// import {MenuIcon, SearchIcon, ShoppingCartIcon} from "heroicons/react/outline"
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";


const Header = () => {
  return (
        <header>
            <div>
                {/* Top nav */}
                <div className='flex items-center bg-lime-400 p-2 h-[100px] flex-grow '>
                    {/* <div>
                        <Image 
                            src="https://links.papareact.com/f90"
                            width={140}
                            height={40}
                            objectFit='contain'
                            className='cursor-pointer'
                        />
                    </div> */}

                    {/* if no logo use this */}

                    <div className='mt-2  flex items-center flex-grow sm:flex-grow-0 '>
                        <h2 className='font-medium text-1xl'> ArgoXplanet </h2>
                    </div>

                    {/* Search bar */}

                    <div className= 'hidden sm:flex items-center h-10 ml-2 rounded-md flex-grow cursor-pointer bg-lime-400 hover:bg-lime-600'>
                        <input className='p-2 h-full  flex-grow flex-shrink rounded-md focus:outline-none' type="text" />
                        <IoSearch  className='h-8 '/>
                    </div>

                    {/* right side  */}

                    <div className='text-white'>
                        <div>
                            <p>Hello Nittin Nobby Mathew</p>
                            <p>Accounts & List</p>
                        </div>

                        <div>
                            <p>Returns</p>
                            <p>& Orders</p>
                        </div>

                        <div>
                            <CiShoppingCart />
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header