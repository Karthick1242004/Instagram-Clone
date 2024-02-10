'use client';
import React from 'react';
import Fe from '/app/components/Feeds.module.css';
import Link from 'next/link';
import { useState } from 'react';

export const Follow = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <main>
      <div className={Fe.fol}>
        <button className={Fe.bt} onClick={() => setIsFollowing(!isFollowing)}>
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    </main>
  );
}
