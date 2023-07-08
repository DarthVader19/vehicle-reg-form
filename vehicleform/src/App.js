import Report from "./report";
import VehDetails from "./vehdetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          
            <Route  path="/" element={<VehDetails />} />
            
            <Route path="/report" element={<Report />} />
            <Route  path="/details" element={<VehDetails />} />

          </Routes>
        </Router>
    </div>
  );
}

export default App;
