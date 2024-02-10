'use client';
import React from 'react';
import Ed from './edit.module.css';

function Edit() {
  return (
    <main>
        <div className={Ed.man}>
           <button type='submit' className={Ed.b1}>Edit Profile</button> 
           <button type='submit' className={Ed.b1}>Share Profile</button> 
        </div>
    </main>
  )
}

export default Edit