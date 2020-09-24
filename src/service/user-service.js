import MUtil from '../util/mm.js';
const _mm=new MUtil();
class User{
    login(loginInfo){
        //login
        return _mm.request({
            type: 'post',
            url:'/manage/user/login.do',
            data:loginInfo
        });
    }
    //check login valid
    checkLoginInfo(loginInfo){
        let username=$.trim(loginInfo.username),
             password=$.trim(loginInfo.password);
        if(typeof username!=='string'||username.length===0){
            return{
                status:false,
                msg:'username cannot be null'
            }
        }
        if(typeof password!=='string'||password.length===0){
            return{
                status:false,
                msg:'password cannot be null'
            }
        }
        return{
            status:true,
            msg:'valid login'
        }
    }
    logout(){
        return _mm.request({
            type: 'post',
            url:'/user/logout.do'
        });
    }
    getUserList(pagenumber){
        return _mm.request({
            type:'post',
            url: '/manage/user/list.do',
            data:{
                pagenumber:pagenumber
            }
        })
    }
    
}

export default User;