import React from 'react';
import './auth.css'
import {ButtonLink} from "@/components/authorization/button_login/Button";
import {Alata} from "next/font/google";
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
