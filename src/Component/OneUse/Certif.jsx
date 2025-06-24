import React from 'react'

import Meta from './Certifs/Meta'
import IA from './Certifs/IA'
import Cyber from './Certifs/Cyber'
import Other from './Certifs/Other'
function Certif() {
  return (
    <div>
        <h2 className='mx-4'>Certifications</h2>
        <Meta/>
    <h4 className='mx-4'>IA :</h4>
    <IA/>
    <h4 className='mx-4'>Cyber :</h4>
    <Cyber/>
    <h4 className='mx-4'>Others :</h4>
    <Other/>
    </div>
  )
}

export default Certif