import React, {Fragment} from 'react';
import Home from './pages/home/index.js';
import Login from './pages/login/index.js';
import Layout from './component/layout/index.js';
import Errorpage from './pages/error/index.js';
import UserList from './pages/user/index.js';
import { BrowserRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom';
class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/' render={(props)=>(
                        <Layout>
                        <Switch>
                            <Route exact path='/'component={Home}/>
                            <Route  path='/product'component={Home}/>
                            <Route  path='/product-map'component={Home}/>
                            <Route  path='/user/index'component={UserList}/>
                            <Redirect excat from='/user' to='/user/index' />
                            <Route component={Errorpage}/>
                            
                            
                        </Switch>
                    
    
                    </Layout>

                    )}/>
                
                </Switch>
                
            </Router>
              
                    

        )
    }
}
export default App;