import React, { Component } from 'react'
import { FaBackward } from 'react-icons/fa'
import EmployeeService from '../employeeServices'

class ViewEmployees extends Component {
    constructor(props) {
        super(props)
     
        this.state = {
            id: this.props.match.params.id,
            employee: {},
            
        }
    
    }
    
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res =>
            {this.setState({employee: res.data});
            console.log(res.data);
           
        })
    }

    cancel(){
        this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Employee Details</h3>
                    <div className = "card-body" >
                    <div className = "row">
                            <label> ID: { this.state.employee._id }</label>
                            
                        </div>
                        <div className = "row">
                            <label> First Name: { this.state.employee.firstName }</label>
                            
                        </div>
                        <div className = "row">
                            <label> Last Name: { this.state.employee.lastName }</label>
                            
                        </div>
                        <div className = "row">
                            <label> Email ID: { this.state.employee.emailId }</label>
                            
                        </div>
                        <div  style={{float:"right"}}>
                        <button  className="btn btn-info" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}><FaBackward/> Back</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployees

// function ViewEmployees(props){

//     const [id,setId]=useState(props.id);
//     const [employee,setData]=useState();
//     const loadData= async()=>{
//         const {id}=useParams();
//         this.setState({id});

//         try{
//             const resp=await EmployeeService.getEmployeeById(this.state.id).then( res => {
//                 this.setState({employee: res.data});
                
//                 console.log(this.state.id);
//             })
//             setData(resp);
//         }catch(e){
//             print(e);
//         }
//     }

//     useEffect(()=>{
//         loadData();
//     },[]);

//     if(this.state.employee)
//     return (
//         <div>
//             <br></br>
//             <div className = "card col-md-6 offset-md-3">
//                 <h3 className = "text-center"> View Employee Details</h3>
//                 <div className = "card-body">
//                     <div className = "row">
//                         <label> Employee First Name: </label>
//                         <div> { this.state.employee.firstName }</div>
//                     </div>
//                     <div className = "row">
//                         <label> Employee Last Name: </label>
//                         <div> { this.state.employee.lastName }</div>
//                     </div>
//                     <div className = "row">
//                         <label> Employee Email ID: </label>
//                         <div> { this.state.employee.emailId }</div>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }
