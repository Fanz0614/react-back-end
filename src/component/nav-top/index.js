import React from 'react';
import { Link } from 'react-router-dom';
class Navtop extends React.Component{
    constructor(props){
        super(props);
    }
    //logout
    onLogout(){
        
    }
    render(){
        return(
            <div className="navbar navbar-default top-navbar">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">E-learning</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right">
                <li className="dropdown">
                    <a className="dropdown-toggle"  href="javascript:;" >
                        <i className="fa fa-user fa-fw"></i> 
                        <span>welcome, admin</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><span onClick={()=>{this.onLogout()}}><i className="fa fa-sign-out fa-fw"></i> Logout</span>
                        </li>
                    </ul>
                    
                </li>
                
            </ul>
        </div>
        )
    }
}
export default Navtop;