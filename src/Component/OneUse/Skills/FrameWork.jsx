import React from 'react'
import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";

function FrameWork({t2}) {
  return (
      <div className='mx-4'>
        <h5>{t2}</h5>
        <ul>
          <li>ReactJS <FaReact/></li>
          <li>Laravel <FaLaravel/></li>
          <li>Flask <SiFlask /></li>
          <li>Scikit-learn <SiScikitlearn /></li>
        </ul>
       </div>
  )
}

export default FrameWork