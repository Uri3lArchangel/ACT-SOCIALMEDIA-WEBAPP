import React from 'react'
import hm from '/styles/Home.module.css'
import {EllipsisHorizontalIcon} from '@heroicons/react/24/solid'

function Nav() {
  return (
    <nav className={hm.navBarTop}>
    <EllipsisHorizontalIcon className='w-16 text-white m-auto ' />
     </nav>
  )
}

export default Nav