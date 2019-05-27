import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Avengers from './Components/Avengers';
import Battle from './Components/Battle';
import { BrowserRouter, Route, Link , Router } from 'react-router-dom';


class App extends React.Component{
    constructor(props){
        super()
    }
        render(){
            return(
                
                <BrowserRouter>
                    <Route exact path={"/"}  component={Avengers} />
                    <Route path={"/battle/:id"} component={Battle}/>
                    </BrowserRouter>
                   
            )
        }
}


ReactDOM.render(<App />, document.getElementById('root'));

