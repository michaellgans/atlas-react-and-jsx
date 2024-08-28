// Header Component

// Asset Imports
import { Greeting } from "./Greeting";
import { SocialLinks } from "./SocialLinks";

// Script Imports

// Returns a Header Component
export function Header() {
    return (
        <nav>
            <Greeting />
            <SocialLinks />
        </nav>
    );
}
