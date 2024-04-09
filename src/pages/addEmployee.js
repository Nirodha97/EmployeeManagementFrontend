import React, {useState} from 'react';
import EmployeeService from '../employeeServices'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaSave, FaWindowClose } from 'react-icons/fa';


const initialState ={
            firstName: '',
            lastName: '',
            emailId: ''
    
};
const AddEmployee=()=>{
    const [state, setState]=useState(initialState);
    const{firstName,lastName,emailId}= state;


    
    const history=useHistory();
    const addEmployee = async(data)=>{
        try {
            const res=await EmployeeService.createEmployee(data);
            console.log(res.data);
            if(res.data==='Employee added!'){
               
                console.log(data);
                toast.success("Successfully add employee details");
                setTimeout(()=> history.push("/employees"),500);

            }
            else {
                console.log(res.data);
                toast.error("Please provide valid Email");
            }
        } catch (error) {
            console.log(error);
        }

    };

    
    
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!firstName || !emailId || !lastName){
            toast.error("Please fill all values")
        }
        else{
            addEmployee(state); //window.location.href="http://localhost:3000/employees";
        }
        
    };
 
    const cancel=()=>{
        history.push('/employees');
    }
    
    
    const handleInputChange = (e) =>{
        let { name, value  }= e.target;
    setState({ ...state, [name]:value});
    }

    return (
        <div>
            <br></br>
               <div className = "container">
               <h2 className="text-center">Add New Employee</h2>
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
            
                            <div className = "card-body">
                                <form onSubmit={handleSubmit}>
                                
                                        <label htmlFor="firstName"> First Name: </label>
                                        <input type="text" placeholder="First Name" name="firstName" className="form-control" 
                                           value={firstName} onChange={handleInputChange} required/>
  
                                    
                                        <label htmlFor="lastName"> Last Name: </label>
                                        <input type="text" placeholder="Last Name" name="lastName" className="form-control" 
                                             value={lastName} onChange={handleInputChange} required/>
                                  
                                    
                                        <label htmlFor="emailId"> Email Id: </label>
                                        <input type="email" placeholder="Email Address" name="emailId" className="form-control" 
                                             value={emailId} onChange={handleInputChange} required/>
                                    
                                    
                                    <button style={{margin:"10px"}} className="btn btn-success" onClick={handleSubmit}><FaSave/> Save</button>
                                    <button className="btn btn-danger" onClick={()=>{cancel()}} style={{marginLeft: "10px"}}><FaWindowClose/> Cancel</button>
                                    
                                     
                                    </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    );
}


export default AddEmployee;