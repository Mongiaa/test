import React from 'react';
import './App.css';
import {BrowserRouter, Route ,Switch} from "react-router-dom";
import Photos from './components/Photos';
import ListUsers from './components/ListUsers'
import UpdateUser from './components/UpdateUser';
import AddUser from './components/AddUser';
import AddPicture from './components/AddPicture';



function App() {
  return (
     <div>
       
       <BrowserRouter>
         
            <Route
            exact
            path="/"
            render={() => <ListUsers/>}/>
            
            <Route 
            exact 
            path="/addUser" 
            render={() => <AddUser />} />
            
            <Switch>
              <Route 
            exact 
            path="/addPicture:id" 
            render={props => <AddPicture id={props.match.params.id}/>} />
            <Route
            exact
            path="/utilisateurs/:id"
            render={(props) => <Photos {...props} />}/>
            <Route
            path="/modifierUtilisateur/:id"
            render={props => <UpdateUser id={props.match.params.id} />}
            />
            
           </Switch>
     </BrowserRouter>
     </div>
  );
}

export default App;
