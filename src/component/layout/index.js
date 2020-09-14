import React from 'react';
import Navtop from '../nav-top/index.js';
import Navside from '../nav-side/index.js';
import './theme.css';
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='wrapper' >
                <Navtop />
                <Navside />
                {this.props.children}
            </div>
        )
    }
}
export default Layout;