import React from 'react';
import { Audiowide } from "next/font/google";
import "../HeaderAuth/TheHeaderAuth.css"

const audio = Audiowide({ weight: '400', subsets: ['latin'] });
export const TheHeaderAuth = () => {
  return (
      <header>
          <div className={audio.className}>
            <button className="dod" >DOD</button>
          </div>
      </header>
  );
};
