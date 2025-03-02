import React from 'react'
import Back from '../components/Common/back/Back'
import Header from '../components/Common/Header/Header'
import Footer from '../components/Common/Footer/Footer'
import InnovationIniCard from '../components/inno_ini/InnovationIniCard'
import MagazineCard from '../components/inno_ini/MagazineCard'

export default function Inno_Ini() {
  return (
    <div>
      <Header/>
      <Back title='Explore DevWorld' image="../images/innovation.jpg"/>
      <InnovationIniCard/>
      <MagazineCard/>
      <Footer/>
    </div>
  )
}
