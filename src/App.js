import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./dashboard/Navbar";
import Home from "./components/Home";
import AddEmployee from "../src/Features/AddEmployee";
import EditEmployee from "../src/Features/EditEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewEmployee from "./Features/ViewEmployee";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addEmployee" element={<AddEmployee />} />
          <Route path="/editEmployee/:id" element={<EditEmployee />} />
          <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
