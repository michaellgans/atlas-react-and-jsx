// SocialLinks Component

// Asset Imports
import linkedIn from "../assets/linkedin.svg"
import gitHub from "../assets/github.svg"

// Script Imports

// Returns a SocialLinks Component
export function SocialLinks() {
    return (
        <div className="social-links">
            <a
                href="https://www.linkedin.com/in/michaellgans/"
                aria-label="Links to Michael L. Gans' LinkedIn"
                target="_blank"
            >
                <img src={linkedIn} alt="LinkedIn Icon" />
            </a>
            <a
                href="https://github.com/michaellgans/atlas-react-and-jsx"
                aria-label="Links to Michael L. Gans' GitHub"
                target="_blank"
            >
                <img src={gitHub} alt="GitHub Icon" />
            </a>
        </div>
    );
}
