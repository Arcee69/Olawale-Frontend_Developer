import React from 'react'
import Logo from "../../assets/icons/SpaceX.svg"

const Header = () => {
  return (
    <div className='w-full '>
        <div className='flex '>
            <div className='w-7/12 cursor-pointer py-2  mx-2 md:mx-8' >
                <img src={Logo} alt='SpaceX-logo' className='w-44'/>
            </div>
            
        </div>
    </div>
  )
}

export default Header