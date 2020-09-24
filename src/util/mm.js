class MUtil{
        request(param){
            return new Promise((resolve, reject)=>{
                $.ajax({
                    type : param.type || 'get',
                    url : param.url || '',
                    dataType : param.dataType || 'json',
                    data : param.data || null,
                    success:res=>{
                        //get data successfully
                        if(0=== res.status){
                            typeof resolve === 'function' && resolve(res.data, res.msg);
                        }
                        //login forcely
                        else if(10 === res.status){
                            this.doLogin();
                        }
                        else{
                            typeof reject === 'function' && reject(res.msg || res.data);
                        }
                    },
                    error:err=>{
                        typeof reject === 'function' && reject(err.statusText);
                    }
                });
            });
            
        }
        doLogin(){
            window.location.href='/login?redirect='+encodeURIComponent(window.location.pathname);
        }
        //get url param
        getUrlParam(name){
            let queryString = window.location.search.split('?')[1]||'';
            let reg=new RegExp("(^|&)"+name+"=([^&]*)(&|$)");
            let result=queryString.match(reg);
            return result? decodeURIComponent(result[2]) : null;

        }
        //error message
        errorTips(errMsg){
            alert(errMsg||'Please try again')
        }
        setStorage(name,data){
            if(typeof data ==='object'){
                window.localStorage.setItem(name,JSON.stringify(data))
            }
            else if (typeof data ==='number' ||typeof data ==='string'||typeof data ==='boolean'){
                window.localStorage.setItem(name,data);
            }
            else{
                alert('invalid');
            }
        }
        getStorage(name){
            let data=window.localStorage.getItem(name);
            if (data){
                return JSON.parse(data);
            }
            else{
                return'';
            }
        }
        removeStorage(name){
            window.localStorage.removeItem(name);
        }
}
export default MUtil;
