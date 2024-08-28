// Greeting Component

import morning from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";
import { getTime } from "./getTime";

// Creates an object map of returned times
// To pass into img src and alt values
const imageSRCMap = {
    Morning: morning,
    Evening: evening,
    Night: night
};

// Returns a Greeting Component
export function Greeting() {
    let currentTime = getTime();
    return (
        <h1 className="greeting">
            <img src={imageSRCMap[currentTime]} alt={`${currentTime} Icon`} />
             Good {currentTime}!
        </h1>);
}