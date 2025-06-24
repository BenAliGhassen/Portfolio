import React from 'react'
import { FaJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";


function Langauge({t1}) {
  return (
    <div className='mx-5'>
       <h5>{t1}</h5>
        <ul>
          <li>Python <FaPython /></li>
          <li>Java <FaJava /></li>
          <li>JavaScript <FaJs/></li>
          <li>PHP <SiPhp  /></li>
          <li>SQL <PiFileSqlBold /></li>
        </ul>
       </div>
  )
}

export default Langauge