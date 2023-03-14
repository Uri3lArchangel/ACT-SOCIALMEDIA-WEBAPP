import Image from 'next/image'
import React from 'react'
import googleIcon_lg from '../../Images/Auth/googleIcon_lg.png'

function GButton() {
  return (
    
    <button className='bg-black flex justify-center items-center text-white text-sm mx-auto px-4 h-16 rounded-full my-3 border border-pink-400/20 googleAuth_btn'>
    <div className='googleIcon w-5 mr-3'>
  <Image src={googleIcon_lg} layout='intrinsic' alt='google' />
  </div>
   <p>Sign Up With Google</p> 
    </button>
  )
}

export default GButton