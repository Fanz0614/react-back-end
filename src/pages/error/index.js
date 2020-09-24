import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from '../../component/page-title/index.js';

class Errorpage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='page-wrapper'>
                <PageTitle title='404 error' />
                <div className='row'>
                    <div className='col-md-12'>
                        <Link to='/'>back to home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Errorpage;