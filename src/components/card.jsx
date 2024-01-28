import React from "react";

export default function Card(props){
    
    let badgeText
    if (props.item.openSpots === 0){
        badgeText = "Sold Out"
    } else if (props.item.location === "Online"){
        badgeText = "Online"
    }

    return(
        <div className="card">
            <div className="card-img">
                <img src={`../images/${props.item.coverImg}`} alt=""></img>
                {badgeText && <div className="status">{badgeText}</div>}
            </div>
            <div className="description">
                <div className="raitings">
                    <img src="../images/star.png" alt=""></img>
                    <span>{props.item.stats.rating}</span>
                    <span className="grey">({props.item.stats.reviewCount}) •</span>
                    <span className="grey">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><b>From ${props.item.price}</b>/ per person</p>
            </div>
        </div>
    )
}