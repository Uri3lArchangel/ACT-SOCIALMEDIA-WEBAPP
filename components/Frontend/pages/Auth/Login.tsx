import React from 'react'
import st from '../../../../styles/Auth.module.css'
import AButton from '../../src/Auth/AppleButton'
import Text_inp from '../../src/Auth/Text_inp'
import GButton from '../../src/Auth/GoogleButton'
import Password_inp from '../../src/Auth/Password_inp'
import SignIn_btn from '../../src/Auth/SignIn_btn'
import SignUp_btn from '../../src/Auth/SignUp_btn'


function Login() {
  return (
    <div id='loginContainer' className={st.form_Container}>
 
    <h1 className={st.name}>AJAX-CORE-TECHS</h1>
   <GButton />
    <AButton />
    <Text_inp desc={'Email Address or Phone Number'} />
    <Password_inp desc='password' />
    <SignIn_btn desc={'Sign In'} />
    <SignUp_btn desc={'Sign Up'} />
  </div>
  )
}

export default Login