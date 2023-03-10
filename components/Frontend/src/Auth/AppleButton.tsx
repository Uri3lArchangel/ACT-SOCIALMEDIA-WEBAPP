import Image from 'next/image'
import React from 'react'
import appleIcon_lg from '../../Images/Auth/appleIcon_lg.png'

function AButton() {
  return (
    <button  className='bg-black justify-center items-center text-white text-sm flex mx-auto px-4 h-16 rounded-full my-3 border border-pink-400/20 appleAuth_btn'>
   <div className='appleIcon w-5 mr-3'>
  <Image src={appleIcon_lg} layout='intrinsic' alt='google' />
  </div>
   <p>Sign Up With Apple</p> 
    </button>
  )
}

export default AButton