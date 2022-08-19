import axios from 'axios';

class EmployeeService {
        baseUrl = "http://localhost:8080/emp";
    
        addEmployee(data){
            return axios.post(`${this.baseUrl}/add`,data);
        }
    
        getAllEmployees(){
            return axios.get(`${this.baseUrl}/get`);
        }
    
        getEmployee(employee_id){
            return axios.get(`${this.baseUrl}/get/{employeeId}`)
        }
    }
    export default new EmployeeService();