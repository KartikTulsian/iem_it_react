import React from 'react'
import { magazine } from '../../dummydata'

export default function MagazineCard() {
  return (
    <div className="innovation-hub">
          {/* Heading Section */}
          <h1 className="innovation-heading">Scholarly Spectrum</h1>
          <p className="innovation-subheading">
          Showcasing innovation, knowledge, and excellence through research, insights, and creative expression.
          </p>
    
          {/* Innovation Cards */}
          <div className="innovation-container">
            {magazine.map((item, index) => (
              <div key={index} className="innovation-card">
                <div className="innovation-icon-container">
                  <img src={item.icon} alt={item.title} className="innovation-icon" />
                </div>
                <h2 className="innovation-title">{item.title}</h2>
                <p className="innovation-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
  )
}
