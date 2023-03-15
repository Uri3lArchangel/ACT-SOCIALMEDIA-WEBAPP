import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import hm from '/styles/Home.module.css'



function AddPost() {
  return (
    <div className={hm.addAPostContainer}>
        <PlusIcon className='text-black w-16 mx-auto' />
        Add a post
    </div>
  )
}

export default AddPost