import { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/Home/Home";

function App() {
  const [handburger, setHandburger] = useState(false);
  return (
    <div>
      <Topbar handburger={handburger} setHandburger={setHandburger} />
      <Sidebar handburger={handburger} />
      <Home />
    </div>
  );
}

export default App;
