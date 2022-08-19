import React,{Component} from 'react';
import logo from './../../assets/logo.png'
import './../header/header.css'
import { Link} from "react-router-dom";
// import Home from '../home/home';





export class Header extends React.Component {

    render(){
        return(
            <div>
            <Link to='/'>
            <header className="header-content header">
                <div className="logo-content">
                {/* <Link to="/"> */}
                     <img src={logo}  alt="logo"/>
                     {/* </Link> */}

                    <div>
                        {/* <Link to='/'> */}
                        <span className="emp-text">EMPLOYEE</span><br/>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                        {/* </Link> */}
             </div>
                </div>
            </header>
            </Link>
        </div>
        )
    }
}
