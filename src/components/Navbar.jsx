import React from 'react'
import { Logo } from '../assets'
import {WelcomeText} from "../components"

const Navbar = () => {
  return (
    <div className='my-0 mx-auto backdrop-blur-md py-1 px-2 max-w-6xl top-0'> 
      <img 
        src={Logo} 
        alt='' 
        className='h-12 mt-5 object-contain'
      />
    <WelcomeText />

    </div>
  )
}

export default Navbar;
