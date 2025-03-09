import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import Awrapper from '../components/about/Awrapper'
import Footer from '../components/Common/Footer/Footer'
import GoToTop from '../components/Common/GotoTop/GoToTop'
import ListMentors from '../components/faculty/ListMentors'
import ItFaculty from '../components/faculty/ItFaculty'

export default function Faculty() {
  return (
    <div>
      <Header/>
      <Back title='Faculty Corner' image="../images/vision.jpg"/> 
      <ItFaculty/>
      {/* <ListMentors/> */}
      <Awrapper/>
      <GoToTop/>
      <Footer/>
    </div>
  )
}
