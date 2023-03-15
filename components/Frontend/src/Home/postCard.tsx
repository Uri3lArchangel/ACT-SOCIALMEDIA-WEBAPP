import React from 'react'
import {EllipsisHorizontalIcon,HandThumbUpIcon,ChatBubbleBottomCenterIcon,ShareIcon,UserCircleIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'
import logo from '/components/Frontend/Images/Home/logo_thick.png'
import hm from '/styles/Home.module.css'


function PostCard() {
  return (
    <li className={hm.postCard}>
          <div className='flex justify-between mb-6 pb-6 border-b'>
            <UserCircleIcon className='w-20 cursor-pointer' />
            <EllipsisHorizontalIcon className='w-20 cursor-pointer' />
          </div>
          <Image src={logo} alt='post from josh image' className='bg-white border' />
          
           <p style={{
            textAlign:'center',
            borderRadius:'10px',
            border:'1px solid white',
            margin:'0.8em 0',
            padding:'0.2em 0.1em',
            backgroundColor:'white',
            color:'black'
            
           }}>Post from Josh</p>
          <div className='flex border mt-6 py-6 text-2xl w-full justify-around'>
            <div className='cursor-pointer hover:text-purple-700 '>
           <HandThumbUpIcon className='w-14' id='like' />
           </div>
           <div className='cursor-pointer hover:text-purple-700 '>
           <ChatBubbleBottomCenterIcon className='w-14 m-auto' id='comment' />
           </div>
           <div className='cursor-pointer hover:text-purple-700'>
           <ShareIcon className='w-14 '  id='share'/>
           </div>
          </div>
          <div className='flex flex-col'>
            <button className='bg-purple-700 border-0 rounded-full my-5 hover:text-purple-700 hover:bg-white'>Follow</button>
            <button className='bg-white border-0 rounded-full my-5 text-purple-700 '>Add friend</button>
          </div>
        </li>
  )
}

export default PostCard