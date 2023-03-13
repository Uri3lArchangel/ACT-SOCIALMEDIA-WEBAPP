import React from 'react'
import st from '../../../../styles/Auth.module.css'

interface Desc{
  desc: string
}

function SignIn_btn({desc}:Desc) {
  return (
    <button className={st.signin_btn}>{desc}</button>
  )
}

export default SignIn_btn