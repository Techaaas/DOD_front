import './TheHeader.css'
import {Audiowide} from "next/font/google";

const audio = Audiowide({weight: '400'})

const TheHeader = () => {
  return (
        <header>
          <div className={audio.className}>DOD</div>
        </header>
  );
};
export {TheHeader};
