import React from 'react'
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";

function Data({t3}) {
  return (
    <div className='mx-4' >
         <h5>{t3}</h5>
        <ul>
          <li>Postgresql <SiPostgresql /></li>
          <li>MySQL <GrMysql /></li>
          <li>MongoDB <SiMongodb /></li>
          <li>SSMS <DiMsqlServer /></li>
        </ul>
       </div>
  )
}

export default Data