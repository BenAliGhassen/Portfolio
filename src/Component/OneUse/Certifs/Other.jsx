import React, { useState } from 'react'

import angular from '../../../images/Certif/Angular.jpeg'
import WP from '../../../images/Certif/wordPress.jpeg'
import IBMJS from '../../../images/Certif/meta intro.jpeg'
import '../../../Styles/HomeStyle/Certif/Meta.css'

const Other = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const images = [IBMJS,angular, WP]

    return (
        <div>
            <div className="meta-gallery">
                {images.map((img, index) => (
                    <div
                        className="gallery-item"
                        key={index}
                        onClick={() => setSelectedImage(img)}
                    >
                        <img src={img} alt={`Other certificate ${index + 1}`} />
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

export default Other
