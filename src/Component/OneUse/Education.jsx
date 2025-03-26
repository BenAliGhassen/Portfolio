import CarouselComp from '../Reusable/Carousel'
import isi from '../../images/isi.jpg';
import fst from '../../images/fst.png';
import lka from '../../images/lka.jpg';
function Education() {


  const diplomes = ['Master en Sécurité des Systèmes et Infrastructures Informatiques (SS2I)',
    "Licence Génie Logiciel et Système d'Information (GLSI) Mention Bien",
    'Baccalauréat en Informatique Mention Trés Bien'
  ]
  const description = [" Formation spécialisée en cybersécurité, administration des systèmes et gestion des risques numériques.  Acquisition de compétences avancées en protection des infrastructures IT et des données sensibles.",
    " Parcours approfondi en développement logiciel, architecture des systèmes et intelligence artificielle.  Expertise en programmation, bases de données et conception d'applications robustes.",
    "Fondations en algorithmique, programmation et mathématiques appliquées.  Introduction aux concepts fondamentaux des systèmes informatiques et des réseaux."]
  const univ = [isi,fst,lka]
  const dates = ['2024-2026','2021-2024',"2021"]
  return (
    <div className='container'>
      <h2 className='mb-4'>Education</h2>
      <CarouselComp diplomes={diplomes} description={description} univ={univ} dates={dates}/>
    </div>
  )
}

export default Education
