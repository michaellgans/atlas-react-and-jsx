import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { HelpfulResource } from "./components/HelpfulResource";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";

// App Component for React Application
function App() {
  return (
    <div className="app">
      <Header />
      <Section title="What is react?">
        <p>
          React is a JavaScript library that was developed by Facebook in 2013.
          Its main purpose is to empower developers build user interfaces (UI's)
          through the creation of components - or modularized chunks of HTML -
          that are then rendered to the DOM through JavaScript functions. 
          Each function typically returns a JSX representation of what should be
          rendered to the DOM, or more simply put, displayed on the web page.
          Generally speaking, these elements are simple with minimal styling
          because they need to be able to be reuseable, like a button.
          From there, the elements can be customized through the use of properties.
        </p>
        <a
          href="https://www.linkedin.com/pulse/reacting-react-virtual-vs-actual-dom-michael-l-gans-jpbhc/?trackingId=O6gx1yVdQJiNgXHPY8TJCg%3D%3D"
          aria-label="Reacting to React Article"
          target="_blank"
        >
          <cite>Reacting to React: Virtual vs Actual DOM</cite>
        </a>
      </Section>
      <Section title="Benefits of react">
        <ul>
          <li>
            Modularized Development
          </li>
          <li>
            Rapid and Efficient Rendering
          </li>
          <li>
            Reuseable Componets
          </li>
          <li>
            Integration with TailwindCSS
          </li>
          <li>
            Transferable to ReactNative
          </li>
        </ul>
      </Section>
      <Section title="Helpful Resources">
        <HelpfulResource label="React Documentation" link="https://react.dev/"/>
        <HelpfulResource label="W3 Schools" link="https://www.w3schools.com/react/"/>
        <HelpfulResource label="YouTube Tutorial" link="https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"/>
      </Section>
      <AboutMe />
      <Footer>
        
      </Footer>
    </div>
  );
}

export default App;
