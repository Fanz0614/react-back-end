import React from 'react';
import { Link } from 'react-router-dom';
import MUtil from '../../util/mm.js';
import User from '../../service/user-service';
import './index.scss';
const _user = new User();
const _mm = new MUtil();
class Navtop extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:_mm.getStorage('userInfo').username || ''
        }
    }
    //logout
    onLogout(){
        _user.logout().then(res=>{
            _mm.removeStorage('userInfo');
            window.location.href='/login';
        }, errMsg=>{
            _mm.erroeTips(errMsg);
        });
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
                <Link className="navbar-brand" to="/">Happy Mall</Link>
            </div>

            <ul className="nav navbar-top-links navbar-right ">
                <li className="dropdown">
                    <a className="dropdown-toggle"  href="javascript:;" >
                        <i className="fa fa-user fa-fw"></i> 
                        <span>Welcome {this.state.username}</span>
                        <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user " >
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a className='logout' onClick={()=>{this.onLogout()}}><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>
                    
                </li>
                
            </ul>
        </div>
        )
    }
}
export default Navtop;