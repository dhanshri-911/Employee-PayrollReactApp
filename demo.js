import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

export class Demo extends Component {
  constructor(){
      super()
      this.state={
        checked:false,
        departmentValue:[],
          department:[ "HR",
            "Sales",
            "Engineer",
            "Finance",
            "Others"]   
      }
  }
  isChecked=(event)=>{
    var {name,checked} = event.target;
      console.log('====================================');
      console.log(event.target);
      console.log('====================================');
    this.setState((event)=>{
      
      var departments=event.department;
     
      return departments[name]=checked;
    })

    this.setState({departmentValue:this.state.department.filter((x)=>this.state.department[x])})
    console.log(this.state.departmentValue);
    console.log((this.state.department).filter((x)=>this.state.department[x]));
  }
  save=()=>{
   
    // console.log('====================================');
    console.log(this.state.departmentValue);
    // console.log('====================================');
  }

  render() {
   
    return (
      <div>
        <input type="checkbox" value={this.state.departmentValue} name="HR" onChecked={!this.state.checked} onChange={this.isChecked}/> HR
        <input type="checkbox" value={this.state.departmentValue} name="Sales" onChange={this.isChecked}/> Sales
        <input type="checkbox" value={this.state.departmentValue} name="Engineer" onChange={this.isChecked}/> Engineer
        <input type="checkbox" value={this.state.departmentValue} name="Finance" onChange={this.isChecked}/> Finance
        <input type="checkbox" value={this.state.departmentValue} name="Others" onChange={this.isChecked}/> Others
     
      <button onClick={this.save}>Save</button> </div>
    )
  }
}

export default Demo