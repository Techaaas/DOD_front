import React from 'react';
import Link from "next/link";
import { Audiowide } from "next/font/google";
import "./TheHeader.css"

const audio = Audiowide({ weight: '400', subsets: ['latin'] });
const TheHeaderAuth = () => {
  return (
      <header>
          <Link className={audio.className} href={'/qr'}>
            <button className="dod" >DOD</button>
          </Link>
      </header>
  );
};

export { TheHeaderAuth };