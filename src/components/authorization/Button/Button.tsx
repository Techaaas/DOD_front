import "./buttonLink.css"
import {Alata} from "next/font/google";

const alata = Alata({weight: '400'})
const ButtonLink = () => {
  let url = "/qr";
  return (
      <div className="buttonLink">
        <a className={alata.className} href={url}>Log in by
          Innopolis University
        </a>
      </div>
  )
}

export {ButtonLink};