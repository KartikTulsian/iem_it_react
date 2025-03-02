import React from 'react'

export default function Heading({ subtitle, title, subtitleClass = ""}) {
    return (
        <div>
            <div id='heading'>
                <h3 className={`heading-subtitle ${subtitleClass ? subtitleClass : ""}`}>{subtitle} </h3>
                <h1>{title} </h1>
            </div>
        </div>
    )
}
