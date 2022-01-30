
import Intro from "./Components/intro/intro";
import About from "./Components/about/about";
import ProjectList from "./Components/projectList/projectList";
import Contact from "./Components/contact/contact";

function App() {
  return (
    <div className="App">
        <Intro/>
        <About/>
        <ProjectList/>
        <Contact/>
    </div>
  );
}

export default App;
