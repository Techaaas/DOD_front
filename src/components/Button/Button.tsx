import "./buttonLink.css"

function ButtonLink () {
    let url="https://www.github.com";
    return(
    <div  className="buttonLink">
        <a href={url}>Log in by
            Innopolis University
        </a>
    </div>
    )
}

export default ButtonLink