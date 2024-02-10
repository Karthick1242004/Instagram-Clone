'use client';
import React from 'react';
import Image from 'next/image';
import Feed from '/app/Images/feeds.jpg';
import Fe from './Feeds.module.css';
import Logo from '/app/Images/profile.png'
import { Follow } from './Follow';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Feeds = () => {
   const [isLike, setIsLike] = useState(false);

 
  return (
     <main>
        <div className={Fe.man}>
          <div className={Fe.cont}>
             <div className={Fe.man1}>
                <Image src={Logo} alt='profile' className={Fe.pf}/>
                <p>Karthick_124_</p>     
             </div>
                <Follow/>
          </div>
             <Image className={Fe.porc} src={Feed} alt='Post'/>
          <div className={Fe.bm}>
             <div className={Fe.likes}>
                <FontAwesomeIcon icon={faHeart} className={Fe.icn}/>
                <FontAwesomeIcon icon={faComment} className={Fe.icn}/>
                <FontAwesomeIcon icon={faShareNodes} className={Fe.icn} />
             </div>
             <FontAwesomeIcon icon={faBookmark} className={Fe.icn1} />
          </div>   
          <div className={Fe.com}>
            <p>Liked by <span className={Fe.span}>karthick_124_ and 12,833 others</span><br/><span className={Fe.span}>Karthick_124_</span> Excited to announce about the new Porsche911 GTR 3 , A ship in road , A luxury to have.<br/><span className={Fe.span1}>View all 54 comments<br/>3 days ago</span></p>
          </div>
        </div>
     </main>
  )
}

export default Feeds