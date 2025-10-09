import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Langauge from './Skills/Langauge';
import FrameWork from './Skills/FrameWork';
import Data from './Skills/Data';
import Outils from './Skills/Outils';
import Frontend from './Skills/Frontend';
import Security from './Skills/Security';
function Skills() {


  const { t, i18n } = useTranslation();

useEffect(()=>{
  i18n.changeLanguage("en")
},[i18n])
  return (
    <div className='container'>

        <h2 className='m-5'>Skills</h2>
        <div className='d-flex gap-5 flex-wrap'>
      <Langauge t1={t("Skills.title1")}/>
     <Frontend/>
      <FrameWork t2={t("Skills.title2")} />
      <Data t3={t("Skills.title3")} />
      <Outils t4={t("Skills.title4")} />
      <Security t5={t("Skills.title5")} />
        </div>
    </div>
  )
}

export default Skills