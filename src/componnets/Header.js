import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
        {/* {top nav} */}
        <div className='flex items-center bg-amazon_blue-light p-1 flex-grow py-2'>
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                <Image 
                    src="https://links.papareact.com/f90"
                    width={140}
                    height={36}
                    // objectFit="contain"
                    className='cursor-pointer'
                />
            </div>
        </div>
        {/* bottom nav */}
        <div className='bg-black'>
            <h1 className='text-red-500'>hi</h1>
        </div>
    </header>
  )
}

export default Header