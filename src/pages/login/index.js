import React from 'react';
import './index.scss';
import MUtil from '../../util/mm.js';
import User from '../../service/user-service.js';
const _user = new User();
const _mm=new MUtil();

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect:_mm.getUrlParam('redirect')||'/'
        }
    }
    componentWillMount(){
        document.title='login- MMAL ADMIN';
    }
    //change user name
    onUsernamechange(e){
        this.setState({
            username:e.target.value
        });
    }
    onPasswordchange(e){
        this.setState({
            password:e.target.value
        });

    }
    onInputKeyUp(e){
        if(e.keyCode===13){
            this.onSubmit()
        }
    }
    //submit
    onSubmit(){
        let loginInfo={
            username:this.state.username,
            password:this.state.password
        },
            checkResult=_user.checkLoginInfo(loginInfo );
        if (checkResult.status){
            _user.login(loginInfo).then((res)=>{
                _mm.setStorage('userInfo',res);
                this.props.history.push(this.state.redirect)
            },(errMsg)=>{
                _mm.errorTips(errMsg);
            });
        }
        else{
            _mm.erroeTips(checkResult.msg);
        }
       
    }
    render(){
        return(
            
                <div className='col-md-4 col-md-offset-4'>
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">Welcome - E-learning</div>
                        <div className="panel-body">
                        <div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="text" 
                                    className="form-control"  
                                    placeholder="Email"
                                    onKeyUp={e=>this.onInputKeyUp(e)}
                                    onChange={e=>this.onUsernamechange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" 
                                    className="form-control"  
                                    placeholder="Password"
                                    onKeyUp={e=>this.onInputKeyUp(e)}
                                    onChange={e=>this.onPasswordchange(e)} />
                        </div>
                        <button   className="btn btn-primary btn-block" onClick={e=>this.onSubmit(e)}>Login</button>
                        </div>

                        </div>
                    </div>

                </div>
            
            
        )
    }
}
export default Login;