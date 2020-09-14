import React, {Fragment} from 'react';
import Home from './pages/home/index.js';
import Layout from './component/layout/index.js';
import { BrowserRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom';
class App extends React.Component{
    render(){
        return(
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/'component={Home}/>
                        <Redirect from="*" to="/" />
                    </Switch>

                </Layout>
                
            </Router>
              
                    

        )
    }
}
export default App;