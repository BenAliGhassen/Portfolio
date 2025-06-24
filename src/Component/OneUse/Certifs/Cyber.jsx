import React, { useState } from 'react'

import cyber from '../../../images/Certif/cyber.jpeg'
import gCyber from '../../../images/Certif/googleCyber.jpeg'
import gCyber1 from '../../../images/Certif/GoogleCyber1.jpeg'
import gNetcyber from '../../../images/Certif/GoogleNetSec.jpeg'

import '../../../Styles/HomeStyle/Certif/Meta.css'


function Cyber() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [cyber, gCyber, gCyber1, gNetcyber]

  return (
    <div>
      <div className="meta-gallery">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Cyber certificate ${index + 1}`} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <span className="close-button">&times;</span>
          <img src={selectedImage} alt="Zoomed certificate" className="modal-image" />
        </div>
      )}
    </div>
  )
}

export default Cyber