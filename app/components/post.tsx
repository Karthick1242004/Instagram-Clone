import React from 'react';
import Po from './post.module.css';
import Image from 'next/image';
import Pos from '/app/Images/burj.png';

function Post() {
  return (
    <main>
        <div className={Po.main}>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
        </div>
        <div className={Po.main2}>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
        </div>
        <div className={Po.main2}>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
        </div>
        <div className={Po.main2}>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
           <Image src={Pos} alt='post' className={Po.imgs}/>
        </div>
    </main>
  )
}

export default Post