import React, { useEffect, useState } from 'react'
import EmployeeService from '../employeeServices'
import { Link,useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import { FaAddressBook, FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { Table } from 'react-bootstrap';



const EmployeeList = () =>{

    const [data,setData]=useState([]);

    const history=useHistory();

    useEffect(()=>{
        getEmployees();
    },[])
    const getEmployees = async()=>{
        const res= await EmployeeService.getEmployees();
        if(res.status===200){
            setData(res.data);
        }
                        
            
        
    };
    const onDeleteEmployee = async(id)=>{
        if(window.confirm("Are you sure that you wanted to delete that use record?")){
            const res= await EmployeeService.deleteEmployee(id);
            if(res.status===200){
                toast.success("Record successfully Deleted");
                getEmployees();
            }
            
        }
                   
                        
            
        
    };
    const addEmployee=()=>{
        history.push("/addEmployee");
    }
    console.log(data);
    return (
        <div className="container-fluid">
             <h2 className="text-center">Employees List</h2>
             <div className = "row">
                <button style={{width:"150px"}} onClick={ () => addEmployee()} className="btn btn-primary"><FaPlus/> Add Employee</button>
             </div>
             <br></br>
             <div className = "row">
                    <Table className = "table table-bordered "size="sm">

                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email Id</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { data && data.map((item,index)=>{
                                return(
                                    <tr key = {index}>
                                         <td> {item.firstName} </td>   
                                         <td> {item.lastName}</td>
                                         <td> {item.emailId}</td>
                                         <td>
                                            <div className="row">
                                                <div className="col-md-4 col-sm-12">
                                            <Link to ={`/updateEmployee/${item._id}`}>
                                            <button style={{width:"100px",margin:"5px"}} className="btn btn-info"><FaEdit/>Update </button>
                                                </Link>
                                                </div>
                                              <div className="col-md-4 col-sm-12">  
                                             <button style={{width:"100px",margin:"5px"}} onClick={ () => onDeleteEmployee(item._id)} className="btn btn-danger"><FaTrash/>Delete </button>
                                             </div>
                                             <div className="col-md-4 col-sm-12">
                                             <Link to ={`/viewEmployee/${item._id}`}>
                                             <button style={{width:"100px",margin:"5px"}} className="btn btn-success"><FaAddressBook/>View </button>
                                         </Link>
                                         </div>

                                            </div>
                                         </td>
                                    </tr>
                            )
                            })}
                            
                        </tbody>
                    </Table>

             </div>

        </div>
    );
}

// class EmployeeList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//                 employees: []
//         }
//         this.addEmployee = this.addEmployee.bind(this);
//         this.editEmployee = this.editEmployee.bind(this);
//         this.deleteEmployee = this.deleteEmployee.bind(this);
//     }

//     deleteEmployee(id){
//         if(window.confirm("Are you sure that you wanted to delete that use record?")){
//             EmployeeService.deleteEmployee(id).then( res => {
//                 this.setState({employees: this.state.employees.filter(employee => employee._id !== id)});
//             });
//             toast.success("Record successfully Deleted")
//         }
//         EmployeeService.deleteEmployee(id).then( res => {
//             this.setState({employees: this.state.employees.filter(employee => employee._id !== id)});
//         });
//     }
//     viewEmployee(id){
//         this.props.navigate(`/viewEmployee/${id}`);
//     }
//     editEmployee(id){
//         this.props.navigate(`/addEmployee/${id}`);
//         console.log(id);
//     }

//     componentDidMount(){
//         EmployeeService.getEmployees().then((res) => {
//             this.setState({ employees: res.data});
//             console.log(res.data);
//         });
//     }

//     addEmployee(){
//         this.props.navigate('/addEmployee');
//     }

//     render() {
        
//     }
// }
// function WithNavigate(props){
//     const navigate = useNavigate();
//     return <EmployeeList {...props} navigate={navigate}/>
// }
export default EmployeeList;