import React, { useState } from 'react'

import IBMDS from '../../../images/Certif/IBMDS.jpeg'
import IBMML from '../../../images/Certif/IBMML.jpeg'
import IBMDA from '../../../images/Certif/IBMDA.jpeg'
import Micro from '../../../images/Certif/MicroSoft IA.png'
import '../../../Styles/HomeStyle/Certif/Meta.css'
function IA() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [Micro,IBMDS, IBMML, IBMDA]

  return (
    <div>
      <div className="meta-gallery">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`IA certificate ${index + 1}`} />
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

export default IA