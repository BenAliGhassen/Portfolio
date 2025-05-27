import React from 'react'
import { useTranslation } from 'react-i18next'
import medianet from '../../images/medianet.png'
import medicapet from '../../images/medicapetLg.png'
import clickme from '../../images/clickme.png'
import clickme2 from '../../images/clickme2.png'
import CardComp from '../Reusable/Card';
import '../../Styles/HomeStyle/Experience/OrganizationHover.css'
import Swal from 'sweetalert2'


function Experience() {
  const { t,i18n } = useTranslation();
  const ExpData = t('Experience.cards', { returnObjects: true });
  const images = [medicapet, medianet];
  const pageLanguage = i18n.language;
console.log(pageLanguage)
const Fnalert = (index)=>{

    index === 0 ? Swal.fire(t('Organization.medicapet')) : Swal.fire(t('Organization.medianet'));

}


  return (
    <div className="slider-container d-flex justify-content-center flex-wrap" id='Experience'>
      <h2 className="m-5 w-100">Experience</h2>

      {ExpData.map((exp, index) => (
         <div key={index} className="organization" style={{ margin: '10px', position: 'relative' }}
         onClick={() => Fnalert(index)}
         >
         <CardComp 
           title={exp.titre} 
           description={exp.description} 
           organi={images[index]} 
           date={exp.date} 
           o
         />
         {pageLanguage === 'fr' ? 
         (
            <img 
           src={clickme2} 
           alt="Click me" 
           className="hover-image" 
         />
         ) : 
         
         <img 
           src={clickme} 
           alt="Click me" 
           className="hover-image" 
         />
         }
       </div>
      ))}

    </div>
  )
}

export default Experience
