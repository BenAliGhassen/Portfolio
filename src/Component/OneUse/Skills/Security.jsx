import React from 'react'
import { SiWireshark } from "react-icons/si";
import { SiBurpsuite } from "react-icons/si";
import { SiMetasploit } from "react-icons/si";
import { FaSpider } from "react-icons/fa";
import { SiCyberdefenders } from "react-icons/si";
import { SiSnort } from "react-icons/si";
import { FaVirusCovidSlash } from "react-icons/fa6";
import { GiFirewall } from "react-icons/gi";
import { FaEye } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { FaSearchengin } from "react-icons/fa";

function Security({t5}) {
  return (
      <div className='mx-4'>
        <h5>{t5}</h5>
           <ul>
             <li>Wireshark <SiWireshark /></li>
             <li>Burpsuite <SiBurpsuite /></li>
             <li>Metasploit <SiMetasploit /></li>
             <li>SpiderFoot <FaSpider /></li>
            <li>CyberChef <SiCyberdefenders /></li>
            <li>Snort <SiSnort /></li>
            <li>IPS/IDS <FaVirusCovidSlash /></li>
            <li>Firewalls <GiFirewall /></li>
            <li>Nmap <FaEye /></li>
            <li>Gobuster <IoIosGlobe /></li>
            <li>OSINT <FaSearchengin /> (Maltego/ osint framework/ DnsdomainsTool/ google dorking ...) </li>
           </ul>
      </div>
  )
}

export default Security