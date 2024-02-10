import React from 'react';
import Fo from './Footer.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

export const Footer = () => {
  return (
     <main>
        <div className={Fo.ft}>
            <div className={Fo.f1}>
              <Link href='/'><FontAwesomeIcon icon={faHouse} className={Fo.icn}/></Link>
              <Link href='/users/search' className={Fo.lk}><FontAwesomeIcon icon={faMagnifyingGlass} className={Fo.icn}/></Link>
              <FontAwesomeIcon icon={faSquarePlus} className={Fo.icn}/>
              <FontAwesomeIcon icon={faClapperboard} className={Fo.icn}/>
              <Link href='/users/profile'><FontAwesomeIcon icon={faUser} className={Fo.icn}/></Link>
            </div>
        </div>
     </main>
  )
}
