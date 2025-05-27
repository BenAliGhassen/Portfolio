import CarouselComp from '../Reusable/Carousel'
import isi from '../../images/isi.jpg';
import fst from '../../images/fst.png';
import lka from '../../images/lka.jpg';
import { useTranslation } from 'react-i18next';
function Education() {

  const { t } = useTranslation();


  const EdsData = t('education.degrees', { returnObjects: true });
  const EdsDesc = t('education.descriptions', { returnObjects: true });
  
  
  const univ = [isi,fst,lka]
  const dates = ['2024-2026','2021-2024',"2021"]
  return (
    <div className='container' id='Education'>
      <h2 className='mb-4'>Education</h2>
      <CarouselComp diplomes={EdsData} description={EdsDesc} univ={univ} dates={dates}/>
    </div>
  )
}

export default Education
