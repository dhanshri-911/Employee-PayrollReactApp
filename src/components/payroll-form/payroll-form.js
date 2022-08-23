import React,{Component} from 'react';
//import logo from '../../assets/logo.png'
import './../payroll-form/payroll-form.css'
import{Header} from '../header/header'
import profile1 from '../../assets/Ellipse -3.png';
import profile2 from '../../assets/Ellipse 1.png';
import profile3 from '../../assets/Ellipse -8.png';
import profile4 from '../../assets/Ellipse -8.png';
import EmployeeService from '../../service/EmployeeService';


class Payrollform extends React.Component {
    constructor() {
        super()
        this.state = {
            allDepartment: [
                'HR', 'Sales', 'Finance', 'Engineer', 'Others'
            ],
            name: '',
            gender: '',
            department: [],
            day:'',
            month:'',
            year:'',
            profilePic: '',
            salary: '',
            joiningDate:'',
            note: '',
            nameError: '',
        }
    }

    changeValue = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        console.log([event.target.name] + ":" + event.target.value)
    }

    onNameChange = (event) => {
        console.log("value is ", event.target.value);
        this.setState({ name: event.target.value })
        const nameRegex = RegExp('^[A-Z][a-zA-Z\\s]{2,}$');
        if (nameRegex.test(event.target.value) || event.target.value === '') this.setState({ nameError: '' })
        else this.setState({ nameError: 'Invalid Name' })
    }

    validData = (data) => {
        let isValid = true;
        if(data.nameError !== ''){
            isValid = false;
        }
        return isValid;
    }

    onCheckChange = (name) => {
        let index = this.state.department.indexOf(name);
        let checkArray = [...this.state.department];
        console.log(checkArray)
        if (index > -1)  checkArray.splice(index, 1);
        else checkArray.push(name);
        this.setState({ department: checkArray });
    };

    getChecked = (name) => {
        return this.state.department && this.state.department.includes(name);
    }

    save = async (Event) => {
        Event.preventDefault();
        if(!this.validData(this.state)){
            console.log("Error Present");
            return;
        }
        this.employeePayrollObject = {
            id : this.state.id,
            name : this.state.name,
            profilePic : this.state.profilePic,
            gender : this.state.gender,
            department : this.state.department,
            joiningDate:`${this.state.day} ${this.state.month} ${this.state.year} `, 
            salary : this.state.salary,
            note : this.state.note,
            
        }
        console.log(this.employeePayrollObject);
      EmployeeService
      .addEmployee(this.employeePayrollObject)
      .then((data)=>{
        console.log(data);
        alert("Data Added Successfully!!", data)
      })
      .catch(error =>{
        console.log(error);
        alert("Error!!")
      })
        
    }
    render(){
        return(
           <div>
               <Header/>
                <div className='form-content'>
                   <form className="form"  action="#" onReset={this.reset} onSubmit={this.save}>
                        <div className="form-head">Employee Payroll Form</div>
                        <div className="row-content">
                            <label className="label text" htmlFor="name">Name :</label>
                            <input className="input" type="text" id="name" name="name" onChange={this.onNameChange} value={this.state.name}  placeholder="Your name.." required/>
                            <error-output className="text-error" htmlFor="text">{this.state.nameError}</error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="profile">Profile image :</label>
                            <div className="profile-radio-content">
                                <label>
                                    <input type="radio" id="profile1" name="profilePic" 
                                             value="../../assets/Ellipse -3.png" required/>
                                    <img className="profile" id="image1" src={profile1} alt="image1"/>
                                </label>
                                <label>
                                    <input type="radio" id="profile2" name="profilePic" onChange={this.changeValue}
                                            ref={this.profileRef2} value="../../assets/Ellipse 1.png" required/>
                                    <img className="profile" id="image2" src={profile2} alt="image2"/>
                                </label>
                                <label>
                                    <input type="radio" id="profile3" name="profilePic" onChange={this.changeValue}
                                            ref={this.profileRef3} value="../../assets/Ellipse -8.png" required/>
                                    <img className="profile" id="image3" src={profile3} alt="image3"/>
                                </label>
                                <label>
                                    <input type="radio" id="profile4" name="profilePic" onChange={this.changeValue}
                                            ref={this.profileRef4} value="../../assets/Ellipse -7.png" required/>
                                    <img className="profile" id="image4" src={profile4} alt="image4"/>
                                </label>
                            </div>       
                        </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                            <select
                                className="input"
                                value={this.state.gender}
                                name= "gender"
                                onChange={this.changeValue}
                                    required>
                            <option value="none" selected disabled hidden>Select an Option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            </select>
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="departments">Department</label>
                        <div>
                            {this.state.allDepartment.map((item ) => (
                            <span key={item}>
                                <input  
                                    type="checkbox" 
                                    name={item} 
                                    onChange={() => this.onCheckChange(item)} 
                                    checked={this.getChecked(item)}
                                    value={item} />
                                <label className="text" htmlFor={item}>{item}</label>
                            </span>
                            ))}
                        </div>
                    </div>

                    <div className="row-content">
                        <label className="label text" for="salary">Salary: </label>
                        <input className="input" type="text" name="salary" id="salary" value={this.state.salary} onChange={this.changeValue}/>
                    </div>
                        <div className="row-content">
                            <label className="label text" htmlFor="joiningDate">Start Date</label>
                            <div id="date">
                                <select name="day" value={this.state.day}  id="day" onChange={this.changeValue}>
                                    <option value="day">Day</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>                                            
                                </select>
                                <select name="month"  value={this.state.month}  id="month" onChange={this.changeValue}>
                                    <option value="month">Month</option>
                                    <option value="Jan">January</option>
                                    <option value="Feb">Febuary</option>
                                    <option value="Mar">March</option>
                                    <option value="Apr">April</option>
                                    <option value="May">May</option>
                                    <option value="Jun">June</option>
                                    <option value="Jul">July</option>
                                    <option value="Aug">August</option>
                                    <option value="Sep">September</option>
                                    <option value="Oct">October</option>
                                    <option value="Nov">November</option>
                                    <option value="Dec">December</option>
                                </select >
                                <select value={this.state.year}  name="year" id="year" onChange={this.changeValue}>
                                    <option value="">Year</option>
                                    <option value="2021">2021</option>
                                    <option value="2020">2020</option>
                                    <option value="2019">2019</option>
                                    <option value="2018">2018</option>
                                    <option value="2017">2017</option>
                                    <option value="2016">2016</option>
                                </select>
                            </div>
                            <error-output className="date-error" for="joiningDate"></error-output>
                        </div>
                        <div className="row-content">
                            <label className="label text" for="notes">Notes</label>
                            <textarea name="note" id="notes" className="input" value={this.state.note} onChange={this.changeValue} placeholder="" style={{height: 100}}></textarea>
                        </div>
                        <div className="button-content">
                            <a href="/Home" className="resetButton button cancelButton">Cancel</a>
                            <div className="submit-reset">
                                <button type="submit" className="button submitButton" id="submitButton">Submit</button>
                                <button type="reset" className="resetButton button">Reset</button>
                            </div>
                        </div>
                   </form>
            </div>
  </div>
)}}

export default Payrollform;