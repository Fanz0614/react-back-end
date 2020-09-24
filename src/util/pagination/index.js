import React from 'react';
import RcPagination from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';
import MUtil from '../../util/mm.js';
import User from '../../service/user-service.js';
const _user = new User();
const _mm=new MUtil();


class Pagination extends React.Component{
    
    render(){
        return(
            <div className='row'>
                <div className='col-mid-12'>
                    <RcPagination {...this.props}
                    hideOnSinglePage
                    showQuickJumper/>
                </div>
            </div>
        )
    }
}
export default Pagination;