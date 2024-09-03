// HelpfulResource Component

import { CopyLink } from "./CopyLink";
import { OpenLink } from "./OpenLink";

// Asset Imports

// Script Imports

// Returns a HelpfulResource Component
export function HelpfulResource({link, label}) {
    return (
        <div className="helpful-resource">
            {label}
            <OpenLink link={link}/>
            <CopyLink link={link}/>
        </div>
    );
}
