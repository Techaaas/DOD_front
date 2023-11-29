import './TheHeader.css'
import {Audiowide} from "next/font/google";
import Link from "next/link";

const audio = Audiowide({weight: '400', subsets: ['latin']})

const TheHeader = () => {
  return (
        <header>
          <Link href={'/qr'}>
            <button className={audio.className}>DOD</button>
          </Link>
        </header>
  );
};
export {TheHeader};
