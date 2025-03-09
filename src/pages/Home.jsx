import React from 'react'
import Header from '../components/Common/Header/Header'
import Hero from '../components/home/hero/Hero'
import Aboutcard from '../components/courses/Aboutcard'
import Habout from '../components/home/Habout'
import Hblog from '../components/home/Hblog'
import Footer from '../components/Common/Footer/Footer'
import Hprogs from '../components/home/Hprogs'
import Hodmsg from '../components/home/Hodmsg'
import NaacCert from '../components/home/NaacCert'
import NoticeBoard from '../components/notice/NoticeBoard'
import GoToTop from '../components/Common/GotoTop/GoToTop'

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      {/* <Hprogs/> */}
      <NoticeBoard/>
      <Hodmsg/>
      <Habout/>
      {/* <Aboutcard/> */}
      {/* <Hblog/> */}
      <NaacCert/>
      <GoToTop/>
      <Footer/>
    </div>
  )
}
