import React from "react";
import cardStyle from './Card.module.css'



const Card = props => {

    return (
        <div className={cardStyle.cards} >
            {props.children}
        </div>
    )
};

export default Card;