import React from "react";
import { ReactDOM } from "react";
import '../index.css';
import doors from'../img/doors.png';
import gearbox from'../img/Gearbox.png';
import sun from'../img/Sun.png';
import users from'../img/users.png';
import check from '../img/check.png';
import cross from '../img/cross.png';


class Main extends React.Component {
    tempo =  "https://auto.mallaky.com/wp-content/uploads/2021/09/toyota-lc_pickup_02.png"
    cars = [[this.tempo,[5,'Manuel', 4, 'A/C'], [doors,gearbox,users,sun],[100 , true , false]],
            [this.tempo,[5,'Manuel', 4, 'A/C'], [doors,gearbox,users,sun],[100 , false ,false]],
            [this.tempo,[5,'Manuel', 4, 'A/C'], [doors,gearbox,users,sun],[300 , true , true]],
            [this.tempo,[5,'Manuel', 4, 'A/C'], [doors,gearbox,users,sun],[100 , true , false]],
           
        ];

    constructor(props){
        super(props);
    }
    Presentation = () => {
        return (
            <section className="main-section" id="home">
                <div>
                    <h1 className="main-title">Roulez en toute confiance  <br/> Trouvez la location de véhicule <br/> idéale pour toutes les occasions</h1>
                    <p>
                        Bienvenue sur le site automobile de vos rêves !<br/>
                        Ici, vous trouverez toutes sortes de voitures haut de gamme à des prix imbattables. <br/>
                        Notre vaste sélection et notre équipe compétente sont là pour s'assurer que vous obtenez<br/> la voiture parfaite pour tous vos besoins. 
                    </p>
                    <button className="main-button">Plus de details</button>
                </div>
                <img className="main-car-img" src="https://www.pngall.com/wp-content/uploads/2016/04/Toyota-Car-Free-Download-PNG.png"/>
            </section>
        )
    }
   
    carsProprety = (props) => {
        let counter = -1;
        return(
            <div className="vehicul-items-item-info">
                <ul className="vehicul-items-sub">
                   {props.otherProprety.map((items) => {
                        counter += 1;
                        return (
                            <li className="vehicul-items-sub-item" key={counter}><img src={items[2][counter]}/> {items[1][counter]}</li>
                        )
                   })}
                </ul>
                <div className="vehicul-items-price">
                    <span>
                        <p><img width="12px" src={props.price[1] ? check : cross}/> Disponible</p>
                        <p><img width="12px" src={props.price[2] ? check : cross}/> Carburant </p>
                    </span>
                    <p className="carPrice">Jour/<br/>${props.price[0]}</p>
                </div>
            </div>
        )
    }

    VehiculsImages = (props) => {
        return (
            <ul className="vehicul-items">
                {props.image.map((items) => {
                return( 
                    <li className="vehicul-items-li">
                        <img className="vehicul-items-item" src={items[0]}/>
                        <this.carsProprety otherProprety = {props.image} price = {items[3]}/>
                    </li>)
                })}
            </ul>
        )
    }

    VehiculList = (props) => {
        return (
            <section className="vehicul-section">
               <div className="vehicul-title">
                 <h3>Voitures disponibles</h3>
                </div>
                <this.VehiculsImages image = {props.info}/>
            </section>
        )
    }

    render = () => {
        return(
            <React.Fragment>
                <this.Presentation/>
                <this.VehiculList info = {this.cars}/>
            </React.Fragment>
        )
     } 
}

export{Main}