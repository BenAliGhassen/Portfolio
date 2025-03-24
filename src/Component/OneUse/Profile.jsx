import React, { useEffect, useState } from 'react'
import photo from '../../images/Photo_Pro.png'
import photo2 from '../../images/Photo_Prohf.png'
import Image from 'react-bootstrap/Image';
import '../../Styles/HomeStyle/ProfileSection.css'
function Profile() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  


  return (
    <div className='container mt-5 ProfileText ProfileStyle'>
      {screenWidth >= 768 ? <Image src={photo} alt='me' fluid/> : <Image src={photo2} alt='me' fluid roundedCircle/>}

      <div className="d-flex flex-column m-auto">
      <h3 className='mt-md-5'>Profile</h3>
      <p className='mt-md-5'><b>Développeur Web Full Stack | IA & Sécurité Informatique</b>
      <br/>
      Diplômé en Informatique en juin 2024 et actuellement en Master en Sécurité des Systèmes et Infrastructure, je suis passionné par 
      l’intelligence artificielle, le développement web et la cybersécurité. Fort d’expériences en développement Full Stack, j’ai conçu et optimisé des solutions web alliant performance, sécurité et expérience utilisateur.
      Je suis à la recherche d’une opportunité pour mettre en pratique mes compétences et contribuer à des projets innovants. Disponible pour un stage, un contrat d’apprentissage ou un CDI, je suis prêt à relever de nouveaux défis
       et à apporter une réelle valeur ajoutée à votre entreprise.</p>
      </div>
     
    </div>
  )
}

export default Profile
