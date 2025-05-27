import React, { useEffect, useState } from 'react'
import photo from '../../images/Photo_Pro.png'
import photo2 from '../../images/Photo_Prohf.png'
import Image from 'react-bootstrap/Image';
import '../../Styles/HomeStyle/ProfileSection.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
function Profile() {

  const { t, i18n } = useTranslation();

useEffect(()=>{
  i18n.changeLanguage("en")
},[i18n])

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);


    AOS.init({
      duration: 1000, 
      once: true, 
      easing: 'ease-in-out', 
    });



    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <div className='container mt-5 ProfileText ProfileStyle' data-aos="fade-right">
      {screenWidth >= 768 ? <Image src={photo} alt='me' fluid/> : <Image src={photo2} alt='me' fluid roundedCircle/>}

      <div className="d-flex flex-column m-auto">
      <h3 className='mt-md-5'>Ghassen Ben Ali</h3>
      <p className='mt-md-5'><b>{t('intro.title')}</b>
      <br/>
     {t('intro.text')}</p>
      <div> 
        <a
      href="/docs/Ghassen-Ben-Ali-CV.pdf"
      download
      className="btn btn-primary w-25 mx-3"
      >
      {t("intro.btn1")}
    </a>
       <a href="mailto:ghassenbenali2@gmail.com" className="btn btn-light w-25">{t("intro.btn2")}</a></div>
      </div>
      
    </div>
  )
}

export default Profile
