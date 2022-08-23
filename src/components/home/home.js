import React,{Component} from 'react';
import EmployeeService from '../../service/EmployeeService';
import { Header } from '../header/header';
import '../home/home.css'
import Display  from './Display';




class Home extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          employees: [],
        };
      }

      getEmployeeList = () => {
      EmployeeService
      .getAllEmployees()
      .then((response) => {
        console.log("Data Added Successfully", response.data);
        this.setState({ employeeList: response.data.data, count: response.data.data.length });
       })
      .catch((error) => console.log("Error Encountered!"));
};

componentDidMount() {
  localStorage.removeItem("editEmp");
  this.getEmployeeList();
}
    render(){
        return(
          <div>
          <Header/>
           <div className='navbar navbar-xpand-md'>
              <ul>
                  <li className="nav-item">
                     
                     <a className="add-button" href="/payroll-form">

                      {/* <img src={add} alt="Add User Logo"/> */}
                     
                        Add User
                     </a>
                </li>
             </ul>
          </div>


          {/* <h1>Employee Details</h1> */}

          {/* <table id="payroll-table">
          <thead>
              <tr>
                  <th>ID</th>
              <th>Name</th>
              <th>Image Path</th>
              <th>Gender</th>
              <th>Salary</th>
              
              <th>Department</th>
              <th>Notes</th>
              <th>Action</th>
              </tr>
              </thead>
              <tbody>
                  {this.state.employees.map((employee) => (
             <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.imagePath}</td>
            <td>{employee.gender}</td>
            <td>{employee.salary}</td>
            <td>{employee.department}</td>
            <td>{employee.note}</td>
            <td> */}
              {/* <button
                onClick={() =>
                  this.handleUpdateEmployeeClick(employee.id)
                }
                className="btn btn-info"
              >
                Update
              </button> */}
              {/* <button
                style={{ marginLeft: "10px" }}
                onClick={() =>
                  this.handleDeleteEmployeeClick(employee.id)} className="btn btn-danger">
                Delete
              </button>
               
            </td>
          </tr>
        ))}
      </tbody>
              </table> */}

<div className="main-content">
              <div className="sub-header-content">
                  <div className="emp-detail-text">
                  <div className="emp-count">{this.state.count}</div>
                  </div>
                  {/* <a href="/" className="add-button"> */}
                  {/* <img src={add} alt="add"/> */}
                  {/* Add User</a> */}
              </div>
              <div>
                  <Display
                      updateEmployee={this.update}
                      employeeArray={this.state.employeeList}
                  />
              </div>
          </div>

   </div>
  );
}
}
export default Home;
