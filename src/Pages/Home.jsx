import '../Styles/HomeStyle/ProfileSection.css'
import Profile from '../Component/OneUse/Profile';
import Education from '../Component/OneUse/Education';
import Projects from '../Component/OneUse/Projects';
import Experience from '../Component/OneUse/Experience';
import Skills from '../Component/OneUse/Skills';
import Certif from '../Component/OneUse/Certif';
import Footer from '../Component/Reusable/Footer';
function Home() {


  


  return (
    <div>
     <Profile/>
     <Education/>
     <Projects/>
     <Experience/>
     <Skills/>
     <Certif/>
     <Footer/>
    </div>
  )
}

export default Home
