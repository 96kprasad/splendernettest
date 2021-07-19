import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import AddUser from "./Components/AddUser";
import Heading from "./Components/Heading";
import ListUser from "./Components/ListUser";
import NotFound from "./Components/NotFound";
import EditUser from "./Components/EditUser";
import View from "./Components/View";
import Splendornet from "./Components/Splendornet";


function App() {
  return(
  <>
 <Router>
 <Heading />
   <Switch>
     <Route exact path ="/" component={Splendornet} />
     <Route exact path ="/addemployee" component={AddUser} />
     <Route exact path ="/listemployee" component={ListUser} />
     <Route exact path ="/editemployee/:id" component={EditUser} />
     <Route exact path ="/view/:id" component={View} />
     <Route component={NotFound} />
   </Switch>
 </Router>
 
  
  </>
  );
}

export default App;
