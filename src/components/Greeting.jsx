// Greeting Component

import App from "../App";
import "./index.css";
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

// Returns a Greeting Component
export function Greeting() {
    return (
        <h1 className="greeting">
            <img src={day} alt="Morning Sun" />
            <img src={evening} alt="Evening Sun" />
            <img src={night} alt="Moon" />
            <text>
                Good Morning!
            </text>
        </h1>);
}