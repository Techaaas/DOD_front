import React from 'react';
import './auth.css'
import {Alata} from "next/font/google";
import {ButtonLink} from "@/components/authorization/button_login";
const alata = Alata({weight: '400', subsets: ['latin']})

export default function Auth(){
  return (
      <>
        <style>{`
        html {
          font-family: ${alata.style.fontFamily};
        }
      `}</style>
        <ButtonLink/>
      </>
  );
};
