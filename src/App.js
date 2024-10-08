import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./dashboard/Navbar";
import Home from "./components/Home";
import AddEmployee from "../src/Features/AddEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
