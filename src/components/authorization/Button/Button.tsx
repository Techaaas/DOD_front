import "./buttonLink.css"

function ButtonLink() {
  let url = "http://localhost:3000/DOD_front/";
  return (
      <div className="buttonLink">
        <a href={url}>Log in by
          Innopolis University
        </a>
      </div>
  )
}

export default ButtonLink