import React from 'react'
import react from '../../images/react.png'
import '../../Styles/FooterStyle/FooterImage.css'
function Footer() {
  return (
    <div className="d-flex justify-content-between text-white px-3 py-2 bg-dark">
      <p className="mb-0">React JS <span>
        <img src={react} alt='reactIcon' className='FooterImg' />
        </span></p>
      <p className="mb-0">© Ghassen Ben Ali</p>
    </div>
  )
}

export default Footer
