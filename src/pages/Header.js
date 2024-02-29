import React from 'react'
// import Image from 'next/image'

const Header = () => {
  return (
        <header>
            <div>
                {/* Top nav */}
                <div className='flex items-center bg-lime-400 p-2 flex-grow '>
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
                    <div>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Header