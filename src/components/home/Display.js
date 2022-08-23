import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import profile1 from '../../assets/Ellipse -3.png';
import profile2 from '../../assets/Ellipse 1.png';
import profile3 from '../../assets/Ellipse -8.png';
import profile4 from '../../assets/Ellipse -7.png';
import deleteIcon from "../../assets/delete-black-18dp.svg";
import editIcon from "../../assets/create-black-18dp.svg";
import '../home/home.css'
import EmployeeService from "../../service/EmployeeService";


class Display extends React.Component {

constructor(props){
    super(props);
    // this.employeeService = new EmployeeService();
}

// remove = (employeeObject) => {
//     this.props.deleteEmployee(employeeObject);
// };

// update = (employeeObject) => {
//     this.props.updateEmployee(employeeObject);
// };

componentDidMount() {
    this.render();
}

// updateEmployee = (employeeId) => {
//   this.props.history.push(`add-employee/${employeeId}`);
// };


handleDeleteEmployeeClick(employeeId) {
  console.log(employeeId)
  var answer = window.confirm("Data once deleted cannot be restored!! Do you wish to continue ?");
  if (answer === true){
  EmployeeService.deleteEmployee(employeeId)
   .then((res) => {
    
          alert("Data Deleted Successfully!!");
          console.log(res.data.message);
      window.location.reload();
      this.props.getEmployeeList();
    
   });
  }
      else{
        console.log("Not delete");
      }
  
}


render(){
    return (
        <table id="table-display" className="table">
          <tbody>
            <tr key={-1}>
             <th>ID</th>
              <th>ProfilePic</th>
              <th>Name</th> 
              <th>Gender</th>
              <th>Department</th>
              <th>Salary</th>
              <th>StartDate</th>
              <th>
                Notes
              </th>
              <th>Actions</th>
            </tr>
            {this.props.employeeArray &&
              this.props.employeeArray.map((element) => (
                <tr key={element.employeeId}>
                   <td>{element.employeeID}</td>
                  <td><img className="profile" alt="" src={
                      element.profilePic ===
                      '../../assets/Ellipse -3.png'
                        ? profile1
                        : element.profilePic ===
                        '../../assets/Ellipse 1.png'
                        ? profile2
                        : element.profilePic ===
                        '../../assets/Ellipse -8.png'
                        ? profile3
                        : profile4
                  }
                  /></td>
                 
                  <td>{element.name}</td>
                  <td>{element.gender}</td>
                  <td>{element.department}
                    {/* {element.departments &&
                      element.departments.map((department) => (
                        <div className="dept-label">{department}</div>
                      ))} */}
                  </td>
                  <td>₹{element.salary}</td>
                  <td>{element.joiningDate}</td>
                  <td>{element.note}</td>
                 
                  <td><img onClick={() => this.handleDeleteEmployeeClick(element.employeeID)} alt="delete" src={deleteIcon}/>
                
                  <img 
                  onClick={() => this.update(element.employeeID)} 
                  alt="edit" 
                  src={editIcon}/></td>
                </tr>
              ))}
          </tbody>
        </table>
      );
    }
}

export default Display;
