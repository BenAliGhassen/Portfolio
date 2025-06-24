import React from 'react'
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { SiHostinger } from "react-icons/si";

function Outils({t4}) {
  return (
   <div className='mx-4'>
     <h5>{t4}</h5>
        <ul>
          <li>Git <FaGitAlt /></li>
          <li>GitHub <FaGithub /></li>
          <li>Azure <VscAzure /></li>
          <li>Hostinger <SiHostinger /></li>
        </ul>
   </div>
  )
}

export default Outils