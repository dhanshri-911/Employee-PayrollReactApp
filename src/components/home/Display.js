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

remove = (employeeObject) => {
    this.props.deleteEmployee(employeeObject);
};

update = (employeeObject) => {
    this.props.updateEmployee(employeeObject);
};

componentDidMount() {
    this.render();
}

render(){
    return (
        <table id="table-display" className="table">
          <tbody>
            <tr key={-1}>
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
                 

                  <td><img onClick={() => this.remove(element)} alt="delete" src={deleteIcon}/>
                  <img onClick={() => this.update(element)} alt="edit" src={editIcon}/></td>
                </tr>
              ))}
          </tbody>
        </table>
      );
    }
}

export default Display;
