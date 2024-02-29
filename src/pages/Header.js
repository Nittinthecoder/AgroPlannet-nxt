import React from 'react'
// import Image from 'next/image'

const Header = () => {
  return (
        <header>
            <div>
                {/* Top nav */}
                <div className='flex items-center bg-lime-500'>
                    {/* <div>
                        <Image 
                            src="https://links.papareact.com/f90"
                            width={140}
                            height={40}
                            objectFit='contain'
                            className='cursor-pointer'
                        />
                    </div> */}
                    <div>
                        <h2 className='font-medium text-1xl'> ArgoXplanet </h2>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header