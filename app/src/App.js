import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/login'
import Signup from './components/signup'
import Forgetpassword from './components/forgetpassword';
import History from './components/history';
import AddRecord from './components/addRecord';

function App() {
  return (
    <div>
      <Router>
        {/* Default navbar of application */}
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>
           <Route exact path="/signup" element={<Signup/>}>
          </Route>
          <Route exact path="/forgetpassword" element={<Forgetpassword/>}>
          </Route>
          <Route exact path="/history" element={<History/>}>
          </Route>
          <Route exact path="/addRecord" element={<AddRecord/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
