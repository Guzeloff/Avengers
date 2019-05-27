import React from 'react';
import ReactDOM from 'react-dom';
import  {Link}  from 'react-router-dom';

class Battle extends React.Component{
    constructor(){
        super()

        this.state={
                liveteam : [
                {id:1 ,  name: "Spiderman" , health:2700 , defence : 150 , attack:60 },
                {id:2 ,  name:"Hulk" , health:1200 , defence : 250 , attack:460 },
                {id:3 ,  name:"IronMan" , health:4200 , defence : 150 , attack:630 }
                    ],
                deadteam : [
                {id:1 ,  name: "Loki" , health:2700 , defence : 150 , attack:60 },
                {id:2 ,  name:"Thanos" , health:1200 , defence : 250 , attack:460 },
                {id:3 ,  name:"Hydra" , health:4200 , defence : 150 , attack:630 }
                    
                ],
                wonteam : "AVENGERS"
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
        
            <div className="text-center">
            <img className="cover" src="https://www.searchpng.com/wp-content/uploads/2019/02/Avengers-Logo-PNG-Image-715x302.png" />
           
           <div className="container">
                
                <div className="row" >
                    
                    <div className="col-md-4">
                    <h4>Alive characters </h4>
                        {this.state.liveteam.map(live =>(
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-success" >{live.name}</li>
                            </ul>
                             ))}
                    </div>
                    <div className="col-md-4">
                        <br/>
                    <h4 >{this.state.wonteam}</h4> <p> has won the battle</p>
                    <Link  to={'/battles'}> <button className="btn btn-warning">Battles History</button> </Link>
                    </div>
                    <div className="col-md-4">
                        <h4>Dead characters </h4>
                        {this.state.deadteam.map(dead =>(
                            <ul className="list-group">
                            <li className="list-group-item list-group-item-danger" >{dead.name}</li>
                            </ul>
                             ))}
                    </div>          

                </div>
           
               
                </div>
            <i>There Is Only ONE In 14 Million Thanos Can Lose</i>
            </div>
    )
    }
}

export default Battle;
