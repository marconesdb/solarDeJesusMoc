import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import { Helmet } from 'react-helmet'
export default function QuemSomos() {
  return (
    <div>
      <Helmet>
        <link rel="icon" href="/Favicons/favicon-16x16.png" />
      </Helmet>
        <Navbar/>
        <h1>QuemSomos</h1>
        <Footer/>
    </div>
    
  )
}
