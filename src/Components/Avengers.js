import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'


class Avengers extends React.Component{
    constructor(){
        super()
        this.state={
            avengers: [],
            avengersteam: [],
            villains: [],
            picks:0 , 
            buttonDisabled:false ,
        }

        this.handleClick = this.handleClick.bind(this)
    }
    RandomVillains(data){
        let random = data.sort(() => 0.5 - Math.random());
        let villains = random.slice(0,3);
        
        this.setState({
            villains:villains
        })
       //  console.log(villains)
    }

    componentDidMount(){
        
        var auth = 'Bearer ' + 'H4OUJ19yD5kKFvE31mkAhG0SJocdtqBQ'

        fetch('http://localhost:3000/avengers', {
            headers: {
               Authorization: auth
             } 
        })
        .then(response => response.json())
        .then(data => this.setState({ avengers:data }));
        
   

        fetch('http://localhost:3000/villains', {
            headers: {
               Authorization: auth
             } 
        })
        .then(response => response.json())
        .then((data) => {
            this.RandomVillains(data);
          })

       
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
            e.currentTarget.disabled = true;  
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
    
       // console.log(this.state.picks)
        //  console.log(avengersteam)
  
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
                    
                    <PrepareBattle villain={this.state.villains} avenger={this.state.avengersteam} other={this.state.picks} button={this.state.buttonDisabled} />
            </div>
            

             
        )
    }

}
function PrepareBattle (props){

    if(props.other < 3){
        return(
        <div className="battle-row">
                <button disabled={!props.buttonDisabled}  className="btn btn-outline-danger">Battle</button>
        </div>
        )
    }
    

     if(props.other === 3) {

         //post method
            var id = 1  // id from the response
            localStorage.setItem('battleid', JSON.stringify(id));

        return(
            <div className="battle-row">
                    
                    <button disabled={!props.buttonDisabled}  className="btn btn-danger">
                        <Link to={'/battle/' + id}> Battle </Link>
                    </button>
                    
            </div>
            )
    }
  
    
     
    
}

 

export default Avengers

