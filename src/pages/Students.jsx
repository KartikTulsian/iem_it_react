import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import Blogcard from '../components/blog/Blogcard'
import '../components/blog/Blog.css'
import Footer from '../components/Common/Footer/Footer'
import GoToTop from '../components/Common/GotoTop/GoToTop'

export default function Students() {
  return (
    <div>
      <Header/>
      <Back title="Student's Corner" image="../images/students.jpg"/>
      <Blogcard/>
      <GoToTop/>
      <Footer/>
    </div>
  )
}
