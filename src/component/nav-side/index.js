import React from 'react';
import {Link, NavLink} from 'react-router-dom';
class Navside extends React.Component{
    render(){
        return(
            <div className="navbar-default navbar-side">
            <div className="sidebar-collapse">
                <ul className="nav">

                    <li>
                        <NavLink exact activeClassName="active-menu" to="/"><i className="fa fa-dashboard"></i> Dashboard</NavLink>
                    </li>
                    <li className='active'>
                        <Link to='/course'><i className="fa fa-sitemap"></i> Course<span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse in">
                            <li>
                                <NavLink activeClassName='active-menu' to='/course'>Course management</NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName='active-menu' to='/course-coursemap'>Course map</NavLink>
                            </li>
                            
                        </ul>
                    </li>
                    <li className='active'>
                        <Link to='/order'><i className="fa fa-sitemap"></i> Order<span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse in">
                            <li>
                                <NavLink activeClassName='active-menu'  to='/order-management'>Order management</NavLink>
                            </li>
                            
                            
                        </ul>
                    </li>
                    <li className='active'>
                        <Link to='/user'><i className="fa fa-sitemap"></i> User<span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level collapse in">
                            <li>
                                <NavLink activeClassName='active-menu'to='/user-management'>User management</NavLink>
                            </li>
                        </ul>
                    </li>
                    
                </ul>

            </div>

        </div>
        )
    }
}

export default Navside;