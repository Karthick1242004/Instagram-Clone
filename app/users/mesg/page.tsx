import React from 'react';
import Ms from './mesg.module.css';
import Image from 'next/image';
import Profilef from '/app/Images/profile.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const Mesg = () => {
  return (
    <main>
        <div className={Ms.main}>
          <div className={Ms.pf}>
             <FontAwesomeIcon icon={faLessThan} className={Ms.icn2}/>
             <div className={Ms.pf11}>
                 <div className={Ms.pf1}>
                   <Image src={Profilef} alt='Profile' className={Ms.prf}></Image>
                 </div>
                 <div className={Ms.name}>
                    <h1>Karthick </h1>
                    <p>Active now</p>
                 </div>
             </div>
               <div className={Ms.icn}>
                <FontAwesomeIcon icon={faPhone} className={Ms.inc1}/>
                <FontAwesomeIcon icon={faVideo} className={Ms.inc1}/>
              </div>
          </div>
        </div>
        <p className={Ms.time}>YESTERDAY AT 23:31</p>
        <div className={Ms.cont}>
          <div className={Ms.cont1}>
            <Image src={Profilef} alt='Profile' className={Ms.prf1}/>
            <div className={Ms.cont11}>
              <p>Hi my name is Karan.</p>
            </div>
          </div>
          <div className={Ms.cont2}>
            <div className={Ms.cont12}>
              <p>Hello Karan.</p>
            </div>
          </div>
          <div className={Ms.cont1}>
            <Image src={Profilef} alt='Profile' className={Ms.prf1}/>
            <div className={Ms.cont11}>
              <p>I think we are both in the same class..</p>
            </div>
          </div>
          <div className={Ms.cont2}>
            <div className={Ms.cont12}>
              <p>Oh is it?, Whats your name?</p>
            </div>
          </div>
          <div className={Ms.cont1}>
            <Image src={Profilef} alt='Profile' className={Ms.prf1}/>
            <div className={Ms.cont11}>
              <p>Hi my name is Karthick.</p>
            </div>
          </div>
          <div className={Ms.cont2}>
            <div className={Ms.cont12}>
              <p>Oh ok..</p>
            </div>
          </div>
          <div className={Ms.cont1}>
            <Image src={Profilef} alt='Profile' className={Ms.prf1}/>
            <div className={Ms.cont11}>
              <p>Lets catch up sometime..Is it ok</p>
            </div>
          </div>
          <div className={Ms.cont2}>
            <div className={Ms.cont12}>
              <p>Sure ..No problem..We will</p>
            </div>
          </div>
        </div>
        <div className={Ms.footer}>
            <div className={Ms.foot}>
              <input type='text' className={Ms.inp1} placeholder='Message...'></input>
            </div>
               <FontAwesomeIcon icon={faCamera}  className={Ms.icnm1}/>
            <div className={Ms.fic}>
              <FontAwesomeIcon icon={faMicrophone} className={Ms.icnm2}/>
              <FontAwesomeIcon icon={faImage} className={Ms.icnm2}/>
              <FontAwesomeIcon icon={faGift} className={Ms.icnm2}/>
            </div>
        </div>
    </main>
  )
}

export default Mesg