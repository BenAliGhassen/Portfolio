import React, { useState } from 'react'
import metaPro from '../../../images/Certif/MetaPro.jpeg'
import metaUXUI from '../../../images/Certif/metaUXUI.jpeg'
import meta1_1 from '../../../images/Certif/meta1.1.jpeg'
import meta1 from '../../../images/Certif/meta1.jpeg'
import meta2 from '../../../images/Certif/meta2.jpeg'
import metaGit from '../../../images/Certif/metaGit.jpeg'
import metaJS from '../../../images/Certif/metaJS.jpeg'
import metaLast from '../../../images/Certif/metalast.jpeg'
import metaProj from '../../../images/Certif/metaProj.jpeg'
import metaReact1 from '../../../images/Certif/metaReact1.jpeg'
import metaReact2 from '../../../images/Certif/metaReact2.jpeg'
import '../../../Styles/HomeStyle/Certif/Meta.css'


const images = [
 metaUXUI, meta1_1, meta1, meta2,
  metaGit, metaJS, metaLast, metaProj,
  metaReact1, metaReact2
]

function Meta() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <div>
        <div className='text-center'>
            <h3 className='m-5'>Meta front-end developer professional certificate</h3>
        </div>
        
      <div className="highlighted-pro" onClick={() => setSelectedImage(metaPro)}>
        <img src={metaPro} alt="Meta Professional Certificate" />
      </div>

 <h4 className='mx-4'>Meta : </h4>
      <div className="meta-gallery">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Meta certificate ${index + 1}`} />
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

export default Meta