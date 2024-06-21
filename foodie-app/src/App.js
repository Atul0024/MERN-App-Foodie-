
import './App.css';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createuser" element={<Signup />} />
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
}

export default App;
