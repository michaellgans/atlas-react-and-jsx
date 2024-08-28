// Section Component

import { Children } from "react";

// Returns a Section Component
export function Section({title, children}) {
    return (
        <div className="section">
            <h1>{title}</h1>
            {Children.map(children, child =>
                child
            )}
        </div>
    );
}
