import React from 'react'

export default function Heading({ subtitle, title, subtitleClass = "", titleClass=""}) {
    return (
        <div>
            <div id='heading'>
                <h3 className={`heading-subtitle ${subtitleClass ? subtitleClass : ""}`}>{subtitle} </h3>
                <h1 className={`heading-title ${titleClass ? titleClass : ""}`}>{title} </h1>
            </div>
        </div>
    )
}
