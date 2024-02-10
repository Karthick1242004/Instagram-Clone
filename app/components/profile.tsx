import React from 'react';
import Image from 'next/image';
import Prof from '/app/Images/profile.png';
import Pr from '/app/components/profile.module.css';

const profile = () => {
  return (
     <main>
        <div className={Pr.mn}>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" /><br/>
             <p>Your Story</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
          <div className={Pr.grad}>
             <Image src={Prof} className={Pr.prof} alt="Story" />
             <p>Karthick_124</p>
          </div>
        </div>
     </main>
  )
}

export default profile