import "./button_login.css"
import {Alata} from "next/font/google";

const alata = Alata({weight: '400', subsets: ['latin']})
const ButtonLink = () => {
  let url = "/";
  return (
      <div className="buttonLink">
        <a className={alata.className} href={url}>Log in by
          Innopolis University
        </a>
      </div>
  )
}

export {ButtonLink};