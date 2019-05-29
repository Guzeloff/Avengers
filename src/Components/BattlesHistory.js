import React from 'react';
import ReactDOM from 'react-dom';
import  {Link}  from 'react-router-dom';

class BattleHistory extends React.Component {
        constructor(){
            super()
            this.state={
                battles : [
                {id:1 ,  winteam: "Avengers" },
                {id:2 ,  winteam: "Villains"  }
                    ]
        }
        }

        /*  componentDidMount(){
        var auth = 'Bearer ' + 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ'
        var url = "http://localhost:3000/battles"

        fetch(url, {
            headers: {
               Authorization: auth
             } 
        })
        .then(response => response.json())
        .then(data => this.setState({ team:data }));
        
    }
 */

        render(){
            return(
                <div className="text-center">
            <img className="cover" src="https://www.searchpng.com/wp-content/uploads/2019/02/Avengers-Logo-PNG-Image-715x302.png" />
           
           <div className="container">
                
                <div className="row justify-content-center" >
                    
                    <div className="col-md-4">
                        <b>History of all your battles </b>
                        {this.state.battles.map(battles =>(
                            
                            <ul className="list-group">
                            <Link to={'/battle/' + battles.id}  className="list-group-item list-group-item-action list-group-item-light" > 
                            Winners : {battles.winteam}  </Link>
                            </ul>
                             ))}

                    <i>Click on the battle to view the details</i>
                    </div>          

                </div>
           
               
                </div>
            
            </div>
            )
        }
}   

export  default BattleHistory