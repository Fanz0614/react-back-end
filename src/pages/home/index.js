import React from 'react';
import './style.css';
import PageTitle from '../../component/page-title/index.js';
class Home extends React.Component{
    render(){
        return(
            <div id='page-wrapper'>
                <PageTitle title='Dash board' />
                <div className='row'>
                    <div className='col-md-12'>body</div>
                </div>
               
            </div>
        )
    }
}

export default Home;