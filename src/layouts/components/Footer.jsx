import React from 'react'

const Footer = () => {
  return (
    <div className='w-full py-3 flex gap-5 xs:flex-col md:flex-row xs:px-2 md:px-8 justify-center items-center  bg-BLACK-_100'>
        <p className='text-WHITE-_100 text-sm font-medium'>
            spacex&copy; 2023
        </p>
        <p className='text-WHITE-_100 text-sm font-semibold'>
            TWITTER
        </p>
        <p className='text-WHITE-_100 text-sm font-semibold'>
            INSTAGRAM
        </p>
        <p className='text-WHITE-_100 text-sm font-semibold'>
            YOUTUBE
        </p>
        <p className='text-WHITE-_100 text-sm font-semibold'>
            LINKEDIN
        </p>
    </div>
  )
}

export default Footer