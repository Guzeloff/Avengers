import React from 'react';
import ReactDOM from 'react-dom';
import { throwStatement } from '@babel/types';

class Avengers extends React.Component{
    constructor(){
        super()
        this.state={
            avengers: [
                {id:1 ,  name: "Spiderman" , health:2700 , defence : 150 , attack:60 },
                {id:2 ,  name:"Hulk" , health:1200 , defence : 250 , attack:460 },
                {id:3 ,  name:"IronMan" , health:4200 , defence : 150 , attack:630 },
                {id:4 ,  name:"CaptainAmerica" , health:3200 , defence : 150 , attack:460 },
                {id:5 ,  name: "DrStrange" , health:5200 , defence : 4150 , attack:60 },
                {id:6 ,  name: "Hawkeye" , health:5200 , defence : 4150 , attack:60 },
                {id:7 ,  name: "Vision" , health:5200 , defence : 4150 , attack:60 },
                {id:8 ,  name: "Thor" , health:5200 , defence : 4150 , attack:60 }
                

              
            ],
            avengersteam: [],
            picks:0 , 
            buttonDisabled:false
        }
        this.handleClick = this.handleClick.bind(this)
    }
   
    handleClick(e) {
        let id = e.currentTarget.id-1;
        e.target.classList = "btn btn-success btn-block"
            if(this.state.picks === 2){
                this.setState({
                    buttonDisabled : true
                })
            }
            if(this.state.picks <= 2){
                e.currentTarget.disabled = true;  //disabled button still listens onClick event
               
            const selectedavenger = this.state.avengers[id];
            var avengersteam = this.state.avengersteam.slice();
             avengersteam.push(selectedavenger)
             this.setState({
            avengersteam:avengersteam,
            picks:this.state.picks +1
           
        })
    }      
       else {
        this.setState({
            avengersteam: [],
            picks:0 ,
            
        })
    
    }
        console.log(this.state.picks)
         console.log(avengersteam)
      }
      
    render(){
        return(
            
                <div>
            <div className="container">
               <div className="text-center"> 
                <img className="cover" src="https://www.searchpng.com/wp-content/uploads/2019/02/Avengers-Logo-PNG-Image-715x302.png" />
                
                </ div>
                <p><b>Choose your 3 favourite Avengers</b></p>
               <div className="row">
                
                {this.state.avengers.map(avenger => (
                        
                         <div  key={avenger.id} className="col-md-3 col-sm-1">
                            <button  disabled= {this.state.buttonDisabled} id={avenger.id} className="btn btn-light btn-block"  onClick={this.handleClick}>{avenger.name} </button>
                             
                         </div>
                ))}
                   
                  
            </div>
            </div>
                
                    <PrepareBattle value={this.state.avengersteam} other={this.state.picks} button={this.state.buttonDisabled} />
            </div>
            

             
        )
    }

}
function PrepareBattle (props) {
    if(props.other < 3){
        return(
        <div className="battle-row">
                <button disabled={!props.buttonDisabled} className="btn btn-outline-danger">Battle</button>
        </div>
        )
    }
     if(props.other == 3) {
        return(
            <div className="battle-row">
                    
                    <button disabled={props.buttonDisabled} className="btn btn-danger">Battle</button>
                    <p><i>Your Avenger team is ready to fight </i></p>
            </div>
            )
    }
  
    
}
export default Avengers

