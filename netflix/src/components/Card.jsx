import React from "react";

function Card(props) {
    return (
        <div className="card mx-4 my-5" style={{width: "20rem"}}>
            <img className="card-img-top" src={props.imgSrc} alt={props.title} />
            <div className="card-body">
                <p className="card-text text-secondary text-uppercase">{props.content}</p>
                <h5 className="card-title"><strong>{props.title}</strong></h5>
                <a href={props.linkSrc} className="btn btn-outline-dark btn-sm text-uppercase" target="_blank" rel="noreferrer">watch now</a>
            </div>
        </div>
    );
}

export default Card;