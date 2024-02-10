import React from 'react';
import Pe from './profile.module.css';
import Image from 'next/image';
import Prop from '/app/Images/profile.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTh } from "@fortawesome/free-solid-svg-icons";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Edit from '@/app/components/edit';
import Post from '@/app/components/post';
import { Footer } from '@/app/components/Footer';

function Profile() {
  return (
    <main>
      <div className={Pe.mnp}>
        <div className={Pe.head}>
            <div className={Pe.head1}>
                <h2>Karthick_124_</h2>
            </div>
            <div className={Pe.head2}>
                <FontAwesomeIcon icon={faSquarePlus} className={Pe.icn}/>
                <FontAwesomeIcon icon={faBars} className={Pe.icn}/>
            </div>
        </div>
          <div className={Pe.prof}>
                 <div className={Pe.prof1}>
                   <Image src={Prop} alt='Profile Image' className={Pe.pf}/>
                 </div>
                 <div className={Pe.prof11}>
                 <div className={Pe.prof2}>
                         <h3>12</h3>
                         <p>Posts</p>
                     </div>
                     <div className={Pe.prof2}>
                         <h3>504</h3>
                         <p className={Pe.pp}>Followers</p>
                     </div>
                     <div className={Pe.prof2}>
                         <h3>421</h3>
                         <p className={Pe.pp}>Following</p>
                     </div>
                 </div>
          </div>
          <div className={Pe.bio}>
            <h4>Karthick_124_</h4>
            <p>Founder <span className={Pe.spam}>@caliber_tech_875_<br/>#Cricketer #Developer #Videographer #Photographer<br/>#Animelover</span><br/>Dm for work.<br/> <span className={Pe.spam}><FontAwesomeIcon icon={faLink} className={Pe.icn2}/>karthick124portfoliosite.netlify.app</span></p>
          </div>
          <div className={Pe.ed}>
            <Edit/>
          </div>
          <p className={Pe.stry}>Story Highlights</p>
          <p className={Pe.stry1}>Keep your favourite stories on your profile</p>
      </div>  
      <div className={Pe.hig}>
        <div className={Pe.hig2}>
          <p>+</p>
        </div>
        <div className={Pe.hig1}>
          <p></p>
        </div>
        <div className={Pe.hig1}>
          <p></p>
        </div>
        <div className={Pe.hig1}>
          <p></p>
        </div>
      </div>
      <div className={Pe.feeds}>
        <div className={Pe.feeds1}>
          <FontAwesomeIcon icon={faTh} className={Pe.icn3}/>
          <FontAwesomeIcon icon={faClapperboard} className={Pe.icn3}/>
          <FontAwesomeIcon icon={faUserCircle} className={Pe.icn3}/>
        </div>
      </div>
      <div className={Pe.fed}>
        <Post/>
      </div>
       <div className={Pe.fott}>
            <Footer/>
          </div>
    </main>
  )
}

export default Profile