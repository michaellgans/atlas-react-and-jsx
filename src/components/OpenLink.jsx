// OpenLink Component

// Asset Imports
import open from "../assets/open.svg"

// Returns a OpenLink Component
export function OpenLink({link}) {
    return (
        <a
            href={link}
            aria-label={`Navigates to ${link}`}
            target="_blank"
        >
            <img src={open} alt="Open Icon" />
        </a>
    );
}
