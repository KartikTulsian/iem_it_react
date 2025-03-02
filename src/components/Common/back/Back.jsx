import React from 'react'
import { useLocation } from "react-router-dom"

export default function Back({title, image}) {
    let location = useLocation()

  return (
    <div>
        <section className='back' style={{ backgroundImage: `url(${image})` }}>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </div>
  )
}
