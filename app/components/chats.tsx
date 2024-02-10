import Ct from './cht.module.css';
import Image from 'next/image';
import Prof from '/app/Images/profile.png';

const Chats = () => {
  return (
    <main>
        <div className={Ct.main}>
          <div className={Ct.main1}>
            <Image src={Prof} className={Ct.prof} alt="Story" /><br/>
            <p>karthick_124</p>
          </div>   
          <div className={Ct.main1}>
            <Image src={Prof} className={Ct.prof} alt="Story" /><br/>
            <p>karthick_124</p>
          </div>   
          <div className={Ct.main1}>
            <Image src={Prof} className={Ct.prof} alt="Story" /><br/>
            <p>karthick_124</p>
          </div>   
          <div className={Ct.main1}>
            <Image src={Prof} className={Ct.prof} alt="Story" /><br/>
            <p>karthick_124</p>
          </div>   
          <div className={Ct.main1}>
            <Image src={Prof} className={Ct.prof} alt="Story" /><br/>
            <p>karthick_124</p>
          </div>   
          <div className={Ct.main1}>
            <Image src={Prof} className={Ct.prof} alt="Story" /><br/>
            <p>karthick_124</p>
          </div>   
        </div>
    </main>
  )
}

export default Chats;