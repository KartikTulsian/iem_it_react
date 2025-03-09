import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import Aboutcard from '../components/courses/Aboutcard'
import Footer from '../components/Common/Footer/Footer'
import Aboutprog from '../components/about/Aboutprog'
import Aboutvision from '../components/about/Aboutvision'
import Hprogs from '../components/home/Hprogs'
import GoToTop from '../components/Common/GotoTop/GoToTop'

export default function About() {
  return (
    <div>
      <Header/>
      <Back title='About Us' image="../images/about_us.jpg"/>
      <Aboutprog/>
      <Aboutvision/>
      <Hprogs/>
      {/* <Aboutcard/> */}
      <GoToTop/>
      <Footer/>
    </div>
  )
}
