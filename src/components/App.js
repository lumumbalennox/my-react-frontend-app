import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Student from "./Student";
import Parent from "./Parent";
import School from "./School";
import Sibling from "./Sibling";
import 'bootstrap/dist/css/bootstrap.min.css';
import Constraint from "./Constraint";
import NewStudentForm from "./NewStudentForm";

function App() {
 
  return <div>
 
      <ul class="nav-list">
          <div class="logo">
         
          </div>
      <header className="App-header">{/**/}
          <Navbar />
      </header>

      <Switch>
      <Route exact path="/newstudentform">
          <NewStudentForm />
        </Route>

      <Route exact path="/student">
          <Student />
        </Route>

        <Route exact path="/parent">
          <Parent />
        </Route>

        <Route exact path="/school">
          <School />
        </Route>

        <Route exact path="/sibling">
          <Sibling />
        </Route>

         <Route exact path="/constraint">
          <Constraint />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </ul>
                  
  </div>;
}

export default App;