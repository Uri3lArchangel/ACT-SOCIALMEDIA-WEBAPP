import Image from 'next/image'
import React from 'react'
import hm from '../styles/Home.module.css'
import Header from '../components/Frontend/src/Home/Header'
import PostCard from '../components/Frontend/src/Home/postCard'
import Footer from '../components/Frontend/src/Home/Footer'
import AddPost from '../components/Frontend/src/Home/AddAPost'
import Rootlayout from '../components/Frontend/pages/Layouts/Home/Root/layout'



function Home() {
  return (
    <Rootlayout>
      <AddPost />
      <div className={hm.body}>
      <ul className={hm.postsContainer}>
        <PostCard />
      </ul>
      </div>
      </Rootlayout>
  )
}

export default Home