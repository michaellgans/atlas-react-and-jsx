// Greeting Component

import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";
import { getTime } from "./getTime";

// Returns a Greeting Component
export function Greeting() {
    let currentTime = getTime();
    return (
        <h1 className="greeting">
            <img src={day} alt="Morning Sun" />
            <img src={evening} alt="Evening Sun" />
            <img src={night} alt="Moon" />
            {currentTime};
        </h1>);
}