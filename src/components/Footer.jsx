// Footer Component

// Asset Imports
import data from "../assets/links.json"
import { getYear } from "./getYear";

const year = getYear();

// Returns a Footer Component
export function Footer() {
    return (
        <footer>
            <ul>
                {data.map(item => (
                    <a
                        key={item.link}
                        href={item.link}
                        aria-label={`Navigates to ${item.link}`}
                        target="_blank"
                    >
                        <li>
                            {item.label}
                        </li>
                    </a>
                ))}
            </ul>
            @ {year} Atlas School
        </footer>
    );
}
