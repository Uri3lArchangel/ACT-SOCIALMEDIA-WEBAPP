import React from 'react'
import Footer from '../../../../src/Home/Footer'
import Header from '../../../../src/Home/Header'
import hm from '/styles/Home.module.css'


function Rootlayout({children}:any) {
  return (
    <div className={hm.root}>
    <Header />
    <main>{children}</main>
    <Footer />
    </div>
  )
}

export default Rootlayout