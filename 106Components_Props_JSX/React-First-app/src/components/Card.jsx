import React from 'react';
import "./Card.css"
const Card=(props)=>{
    return(
        <div className="card" style={{overflow:"hidden"}}>
            <img className='img' src={props.img} alt={props.title}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default Card