import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const BaseLayout = () => {
  return (
    <>
        <Nav/>
        <div>
            <Outlet/>
        </div>
        <Footer/>
    </>
  )
}

export default BaseLayout