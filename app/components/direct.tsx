'use client';
import Ch from '/app/users/chat/chat.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Prof from '/app/Images/profile.png';

function Direct() {
    return (
      <main>
        <div className={Ch.maindir}>
        <div className={Ch.direct}>
          <div className={Ch.direct1}>
            <Image src={Prof} className={Ch.proc} alt='Account'/>
          </div>
          <div className={Ch.name}>
            <p className={Ch.name1}> Karthick_124_</p>
            <p className={Ch.name2}>+9 new messages <span className={Ch.sp1}> .2h</span></p>
          </div>
        </div>
        <div className={Ch.cam}>
          <FontAwesomeIcon icon={faCamera} className={Ch.icn1}/>
        </div>
        </div>
    </main>
)}
export default Direct