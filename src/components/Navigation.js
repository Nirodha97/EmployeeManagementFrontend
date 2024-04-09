import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navigation.css';

const  NavigationBar =()=> {
    
 
        return (
        
               <Navbar collapseOnSelect fixed='top' expand='lg' bg='black' varient='black' className='navbar-dark'>
            <Container>
            <Navbar.Brand>Employee Management</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className="navbar-nav mx-auto">
                        <Nav.Link href='/'id="navItem">Home</Nav.Link>
                        <Nav.Link href='/addEmployee' id="navItem">Add Employee</Nav.Link>
                        <Nav.Link href='/employees' id="navItem">Employee List</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
        )
    
}
// const [activeTab,setActiveTab]= useState("employees");
//         return(
//             <div className="header">
//                 <p className="logo">Employee Management</p>
//                 <div className="header-right">
//                     <Link to="/">
//                         <p
//                         className={`${activeTab === "EmployeeList"? "active":""}`}
//                         onClick={()=> setActiveTab("EmployeeList")}>
//                             Home
//                         </p>
//                     </Link>
//                     <Link to="/viewEmployee/:id">
//                         <p
//                         className={`${activeTab === "ViewEmployees"? "active":""}`}
//                         onClick={()=> setActiveTab("ViewEmployees")}>
//                             ViewEmployees
//                         </p>
//                     </Link>
//                 </div>
                
//             </div>
//         )

export default NavigationBar;