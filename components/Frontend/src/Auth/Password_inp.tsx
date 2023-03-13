import React from 'react'


interface Desc{
  desc:string
}

function Password_inp({desc}:Desc) {
  return (
    <input type="password" className='w-11/12 block mx-auto text-center outline-none rounded-lg border border-purple-200/50 bg-transparent text-white text-xs h-8 placeholder:text-white my-4 passAuth_inp'  placeholder={desc} />
  )
}

export default Password_inp