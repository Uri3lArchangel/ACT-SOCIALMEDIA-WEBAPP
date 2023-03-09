import React from 'react'
import st from '../../../../styles/Auth.module.css'
import AButton from '../../src/Auth/AppleButton'
import GButton from '../../src/Auth/GoogleButton'


function Login() {
  return (
    <form action="">
    <h1 className={st.name}>AJAX-CORE-TECHS</h1>
   <GButton />
    <AButton />
    <input type="text" className='w-11/12 block mx-auto text-center outline-none rounded-lg border border-purple-200/50 bg-transparent text-white text-xs h-8 placeholder:text-white my-4' placeholder='Email Address or Phone Number' />
    <input type="password" className='w-11/12 block mx-auto text-center outline-none rounded-lg border border-purple-200/50 bg-transparent text-white text-xs h-8 placeholder:text-white my-4' placeholder='Password' />
    <button className={st.signin_btn}>Sign In</button>
    <button className='text-white text-sm bg-gray-800 w-6/12 py-1 mx-auto my-6 block rounded-full shadow-md shadow-black'>Sign Up</button>
  </form>
  )
}

export default Login