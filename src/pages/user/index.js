import React from 'react';
import {Link} from 'react-router-dom';
import PageTitle from '../../component/page-title/index.js';
import Pagination from '../../util/pagination/index.js';
import MUtil from '../../util/mm.js';
import User from '../../service/user-service.js';
const _user = new User();
const _mm=new MUtil();
class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            pageNum:1
        }
    }
    componentDidMount(){
        this.loadUserList();
    }
    loadUserList(){
        _user.getUserList(this.state.pageNum).then(res=>{
            this.setState(res)
        },errMsg=>{
            _mm.errorTips(errMsg)
        });
    }
    onPageNumberChange(pageNumber){
        this.setState({
            pageNum:pageNumber
        }, ()=>{
            this.loadUserList();
        })
    }
    render(){
        return(
            <div id='page-wrapper'>
                <PageTitle title='User list' />
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-striped table-bordered'>
                        <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Create time</th> 
                                </tr>
                            </thead>
                            <tbody>     
                            {this.state.list.map((user,index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{user.id}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.phone}</td>
                                            <td>{new Date(user.createTime).toLocaleString()}</td>
                                        </tr>
                                    );
                                     
                                })}
                               
                            </tbody>
                        </table>
                        <Pagination current={this.state.pageNum} total={this.state.total} onChange={(pageNumber)=>this.onPageNumberChange(pageNumber)}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserList;