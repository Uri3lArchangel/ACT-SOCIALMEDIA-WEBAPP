import React from 'react'
import {change} from '../../Functions/Auth/changeForms'

interface Desc{
  desc:String
}

function SignUp_btn({desc}:Desc) {
  return (
    <button className='text-white text-sm bg-gray-800 w-6/12 py-1 mx-auto my-6 block rounded-full shadow-md shadow-black signinAuth_btn' onClick={
      change
    }>{desc}</button>
  )
}

export default SignUp_btn