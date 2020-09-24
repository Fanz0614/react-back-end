import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';
import PageTitle from '../../component/page-title/index.js';
import MUtil from '../../util/mm.js';
import Statistic from '../../service/statistic-service';
const _statistic = new Statistic();
const _mm=new MUtil();
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userCount:'-',
            productCount:'-',
            orderCount:'-'
        }
    }
    componentDidMount(){
        this.loadCount()
    }
    loadCount(){
        _statistic.getHomeCount().then(res=>{
            this.setState(res);
        },errMsg=>{
            _mm.errorTips(errMsg);
        });
    }
    render(){
        return(
            <div id='page-wrapper'>
                <PageTitle title='Dash board' />
                <div className='row'>
                    <div className='col-md-4 col-sm-12 xol-xs-12'>
                        <Link to='/product'>
                            <p className='panel-body first'>
                                
                                <i className='fa fa-bar-chart-o fa-5x'></i>
                                <h3>{this.state.productCount}</h3>
                                
                                <p className='desc'>
                                
                                <div className="panel-footer back-footer-green">Item number</div>
                                
                            </p>
                                
                            </p>
                           
                            
                        </Link>
                    </div>
                    <div className='col-md-4 col-sm-12 xol-xs-12'>
                        <Link to='/order'>
                            <p className='panel-body second'>
                                
                                <i className='fa fa-shopping-cart fa-5x'></i>
                                <h3>{this.state.orderCount}</h3>
                                
                                <p className='desc'>
                                
                                <div className="panel-footer back-footer-blue ">Sales</div>
                                
                            </p>
                                
                            </p>
                           
                            
                        </Link>
                    </div>
                    <div className='col-md-4 col-sm-12 xol-xs-12'>
                        <Link to='/user'>
                            <p className='panel-body third'>
                                
                                <i className='fa fa-users fa-5x'></i>
                                <h3>{this.state.userCount}</h3>
                                
                                <p className='desc'>
                                
                                <div className="panel-footer back-footer-brown ">Users</div>
                                
                            </p>
                                
                            </p>
                           
                            
                        </Link>
                    </div>
                    
                </div>
                
                    
                
               
            </div>
        )
    }
}

export default Home;