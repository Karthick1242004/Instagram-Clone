'use client';
import Ch from './chat.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import Chats from '@/app/components/chats';
import Direct from '@/app/components/direct';
import Link from 'next/link';

function Chat() {
  return (
    <main>
        <div className={Ch.mchat}>
            <div className={Ch.head}>
              <div className={Ch.head1}>
                <h2>karthick_124_</h2>
                <FontAwesomeIcon icon={faPenToSquare} className={Ch.icn1}/>
              </div>
              <div className={Ch.head2}>
                <input placeholder='Search' type='search' className={Ch.inp}></input>
              </div>
            </div>
            <div className={Ch.pre}>
              <Chats/>
            </div>
            <div className={Ch.msg}>
              <p><span className={Ch.gs}>Messages</span></p>
              <p className={Ch.req}>Requests</p>
            </div>
            <div className={Ch.dir}>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
               <Link className={Ch.ln} href='/users/mesg'><Direct/></Link>
            </div>   
        </div>
    </main>
  )
}

export default Chat