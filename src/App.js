import "./input.css";
import NavBar from "./components/NavBar";
import Employees from "./pages/Employees";
import About from "./pages/About";
import Dictionary from "./components/Dictionary";

import { BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";



function App() {
  return (
    <div className="App bg-purple-100 min-h-screen">
    <Router>
      <NavBar>  
          <Routes>
            <Route path = '/Employees' element = {<Employees />} />
            <Route path = '/About' element = {<About />} />
            <Route path = '/Dictionary' element = {<Dictionary />} />
          </Routes>
        </NavBar>
    </Router>
    </div>
  )
}

export default App;
