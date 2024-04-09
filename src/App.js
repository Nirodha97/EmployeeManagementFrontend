import React from 'react';
import './App.css';
import { Route,Switch} from 'react-router-dom'
import EmployeeList from './pages/employeeList';
import AddEmployee from './pages/addEmployee';
import ViewEmployees from './pages/viewEmployees';
import NavigationBar from './components/Navigation';
import Footer from './components/footer/footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateEmployee from './pages/updateEmployee';


function App() {
  return (
    
    <div className="main-wrapper">
       
       <NavigationBar/>
       <ToastContainer position="top-center" autoClose={2000}/>
      
    <div className="container">
         <div className="app-main">
           
                 
                    <Switch> 
                    <Route exact path = "/" component={EmployeeList}></Route>
                          <Route exact path = "/employees" component={EmployeeList}></Route>
                          <Route path = "/addEmployee" component={AddEmployee}></Route>
                          <Route path = "/viewEmployee/:id" component={ViewEmployees}></Route>
                          <Route path = "/updateEmployee/:id" component={UpdateEmployee}></Route>
                    </Switch>
                  
                   
                </div>
               
                
       </div>
       <div>
               <Footer/>
       </div>
    </div>
    
  );
}

export default App;