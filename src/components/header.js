import React from "react";
import { ReactDOM } from "react";
import '../index.css';

class Header extends React.Component{
    
   displayLine = {1 : 'none',2 : 'none',3 : 'none',4 : 'none'};
   constructor(props){
     super(props);
     this.state = {
        displayLine:{...this.displayLine},
        navItems : ['Home' ,'About us','Cars','Contact']
    }
   }

   Nav = () => {
        let counter = 0;
        return(
            <ul className="nav-items">
                 {this.state.navItems.map((items) => {
                    counter += 1;
                    return (
                        <li value={counter} key={counter} className="nav-items-list" onMouseOver={this.handleHr}>
                            <a href="#home">{items}</a> 
                            <hr style={{display : this.state.displayLine[counter]}} className="nav-items-hr"></hr>
                        </li>
                        );
                })}
            </ul>
         )
   }

   Logo = () => {
       return (
            <div className="logo-side">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" color="white" className="bi bi-list humberger" viewBox="0 0 16 16">
                   <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
               </svg>
                <h5 className="nav-logo">Diaspora Groupe Ltd</h5>
            </div>
        )
   }

   handleHr = (event) => {
    let liValues = parseInt(event.target.parentNode.value);
    this.setState(() => {
       return{
        displayLine:{...this.displayLine , [liValues] : 'block'}
       }
    })
   } 

   render(){
    return (<header className="Header">
        <this.Logo/>
        <this.Nav/>
    </header>)
   }
}

export{Header}