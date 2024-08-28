// Section Component

// Asset Imports

// Script Imports

// Returns a Section Component
export function Section({title}) {
    return (
        <div className="section">
            <h1>{title}</h1>
            <p>
                React is not a language of its own; rather, it is a JavaScript library that was developed by Facebook in 2013. Its main purpose is to empower developers build user interfaces (UI's) through the creation of components - or modularized chunks of HTML - that are then rendered to the DOM through JavaScript functions. 
                Each function typically returns a JSX representation of what should be rendered to the DOM, or more simply put, displayed on the web page. Generally speaking, these elements are simple with minimal styling because they need to be able to be reuseable, like a button. From there, the elements can be customized through the use of properties (React calls them props). 
                An example of this is if I have 14 buttons on my UI instead of manually coding all 14, I can have one "button" function that returns a very general, simple button. I can then use that button where I need, and style it differently when necessary. Less coding, more modularity.
                This is a unique approach to web development because you often have one HTML document, typically called "index.html", instead of multiple pages that need to be navigated between. React allows you to build a single-page application (SPA) that only updates the DOM when and where a change is needed instead of updating the entire DOM every time any change happens.
            </p>
        </div>
    );
}
