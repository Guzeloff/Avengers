import React from 'react';
import ReactDOM from 'react-dom';
import  Link  from 'react-router-dom';

class Battle extends React.Component{
    constructor(){
        super()

        this.setState={
                WinTeam: []
        }
    }

   /*  componentDidMount(){
        let battleid =  localStorage.getItem("battleid");
        var auth = 'Bearer ' + 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ'
        var url = "http://localhost:3000/battle" + id 

        fetch(url, {
            headers: {
               Authorization: auth
             } 
        })
        .then(response => response.json())
        .then(data => this.setState({ WinTeam:data }));
        
    }
 */

    render() {
    return(
        <div>
            <h1>something</h1>
        </div>
    )
    }
}

export default Battle;