// CopyLink Component

// Asset Imports
import copy from "../assets/copy.svg"

// Script Imports
import { copyLink } from "./copyLink";

// Returns a CopyLink Component
export function CopyLink({link}) {
    return (
        <img 
            className="copy" 
            onClick={(event) => copyLink(event, link)} 
            src={copy} 
            alt="Copy Icon" 
        />
    );
}
