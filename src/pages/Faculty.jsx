import React from 'react'
import Header from '../components/Common/Header/Header'
import Back from '../components/Common/back/Back'
import Awrapper from '../components/about/Awrapper'
import Footer from '../components/Common/Footer/Footer'
import ListFaculty from '../components/faculty/ListFaculty'

export default function Faculty() {
  return (
    <div>
      <Header/>
      <Back title='Faculty Corner' image="../images/vision.jpg"/> 
      <ListFaculty/>
      <Awrapper/>
      <Footer/>
    </div>
  )
}
