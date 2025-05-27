import React from 'react'
import { useTranslation } from 'react-i18next';
function LangSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    return (
      <div className='mx-3'>
        <button className='text-light bg-dark' onClick={() => changeLanguage('fr')}>FR</button>
        <button className='text-light bg-dark' onClick={() => changeLanguage('en')}>EN</button>
      </div>
    );
  };

export default LangSwitcher