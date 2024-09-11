import {  Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import Home from "./components/home";
import Login from "./components/login";
import Contact from "./components/contact";
import { store } from "./components/store";


function App() {
  return( 
    <div className="text-center mt-3">
      <Provider store={store}>
          <Router>
            <div className="d-flex justify-content-center align-items-center">
              <Link className="mx-3 btn btn-outline-primary" style={{textDecoration:"none"}} to="/"><h4>home</h4></Link>  
              <Link className="mx-3 btn btn-outline-primary" style={{textDecoration:"none"}} to="/login"><h4>login</h4></Link> 
              <Link className="mx-3 btn btn-outline-primary" style={{textDecoration:"none"}} to="/contact"><h4>contact</h4></Link>
            </div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
          </Provider>
      </div>);
}
export default App;