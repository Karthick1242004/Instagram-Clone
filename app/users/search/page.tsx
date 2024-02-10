import React from 'react';
import Se from './Search.module.css'
import Image from 'next/image';
import Bur from '/app/Images/burj.png';
import { Footer } from '@/app/components/Footer';

function Search() {
  return (
    <main>
      <div className={Se.ser}>
        <div className={Se.search}>
          <input className={Se.sinp} placeholder='Search'/>
        </div>
        <div className={Se.search1}>
          <div className={Se.four}>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
          </div>
          <div className={Se.sin}>
             <Image src={Bur} alt='Loading Post' className={Se.sbur}/>
          </div>
        </div>
        <div className={Se.search2}>
          <div className={Se.four}>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
          </div>
          <div className={Se.sin}>
             <Image src={Bur} alt='Loading Post' className={Se.sbur}/>
          </div>
        </div>
        <div className={Se.search2}>
          <div className={Se.four}>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
          </div>
          <div className={Se.sin}>
             <Image src={Bur} alt='Loading Post' className={Se.sbur}/>
          </div>
        </div>
        <div className={Se.search2}>
          <div className={Se.four}>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
          </div>
          <div className={Se.sin}>
             <Image src={Bur} alt='Loading Post' className={Se.sbur}/>
          </div>
        </div>
        <div className={Se.search2}>
          <div className={Se.four}>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
             <Image src={Bur} alt='Loading Post' className={Se.bur}/>
          </div>
          <div className={Se.sin}>
             <Image src={Bur} alt='Loading Post' className={Se.sbur}/>
          </div>
        </div>
      </div>
      <div className={Se.fott}>
            <Footer/>
          </div>
    </main>
  )
}

export default Search