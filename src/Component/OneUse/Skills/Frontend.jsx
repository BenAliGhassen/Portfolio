import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { FaJs } from "react-icons/fa";

function Frontend() {
  return (
     <div className='mx-4'>
        <h5>Front-end</h5>
        <ul>
          <li>HTML5 <FaHtml5 /></li>
          <li>CSS3 <FaCss3Alt /></li>
          <li>Bootstrap <BsBootstrapFill /></li>
          <li>JavaScript <FaJs /></li>
          <li>ReactJS <FaReact/></li>
        </ul>
      </div>
  )
}

export default Frontend