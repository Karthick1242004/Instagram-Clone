import Image from "next/image";
import Pg from "/app/page.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Profile from './components/profile';
import Feeds from "./components/Feeds";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main>
       <div className="mainmn">
        <div className={Pg.main}>
          <div className={Pg.nav}>
            <div className={Pg.nav2}>
              <h2>Instagram</h2>
            </div>
            <div className={Pg.nav1}>
              <FontAwesomeIcon icon={faHeart} className={Pg.icn1}/>
              <Link href="/users/chat"><FontAwesomeIcon icon={faFacebookMessenger} className={Pg.icn1}/></Link>
            </div>
          </div>
          <div className={Pg.stry}>
            <div className={Pg.stry1}>
              <Profile />
            </div>
          </div>
          <div className={Pg.fed}>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
            <Feeds/><br/>
          </div>
        </div>
        <div className={Pg.fott}>
            <Footer/>
          </div>
      </div> 
    </main>
  );
}
