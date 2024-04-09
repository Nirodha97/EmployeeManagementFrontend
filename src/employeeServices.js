import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "https://560ebe39-5f34-4ca7-92f5-86664940bfd5-dev.e1-us-east-azure.choreoapis.dev/employee-management-be/employee-management-backend/employee-management-backened-d2d/v1.0/api/v1/employees"; 

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()