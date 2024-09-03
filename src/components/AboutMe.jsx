// AboutMe Component

// Asset Imports
import me from "../assets/Me.jpg"

// Script Imports

// Returns a AboutMe Component
export function AboutMe() {
    return (
        <div className="about-me">
            <img 
                src={me}
                alt="Photo of Michael L. Gans"
            />
            <p>
                My name is Michael L. Gans and I am a Full Stack student
                at Atlas School in my final trimester.  I tend to lean
                more towards Front End, so I'm fluent in HTML, CSS, React,
                and JavaScript, however I enjoy database design as well!
                For styling, I enjoy both Bootstrap and TailwindCSS, and I
                prefer Node.js and MongoDB for my database management. <br />
                After I graduate in December 2024, I would like to become
                a Software Engineer and create applications for both web and
                mobile, but I would love to specifically work for a company
                that allows me to continue to learn and never stop asking why.
                Outside of school, I enjoy Dungeons & Dragons, as well as
                Magic the Gathering and podcasts like Sawbones.
            </p>
        </div>
    );
}
