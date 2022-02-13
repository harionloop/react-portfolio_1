import "./App.css";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div>
      <Topbar />

      <Intro />
      <Contact />
    </div>
  );
}

export default App;
