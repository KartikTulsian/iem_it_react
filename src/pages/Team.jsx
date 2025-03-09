import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import Teamcard from '../components/team/Teamcard'
import Awrapper from '../components/about/Awrapper'
import Footer from '../components/Common/Footer/Footer'
import Contact from './Contact'
import GoToTop from '../components/Common/GotoTop/GoToTop'

export default function Team() {
  return (
    <div>
      <Header/>
      <Back title='Team' image="../images/team.jpg"/>
      <Teamcard/>
      <Contact/>
      <Awrapper/>
      <GoToTop/>
      <Footer/>
    </div>
  )
}
