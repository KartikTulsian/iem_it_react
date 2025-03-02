import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import Footer from '../components/Common/Footer/Footer'
import Aboutcard from '../components/courses/Aboutcard'

export default function Courses() {
  return (
    <div>
      <Header/>
      <Back title='Explore Academics' image="../images/academics.jpg"/>
      <Aboutcard/>
      {/* <Coursescard/> */}
      {/* <Onlinecourses/> */}
      <Footer/>
    </div>
  )
}
