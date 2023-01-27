import React from "react";
 
const Card =(props) => {
    const {name, email, id} = props;
    return (
    <div className="tc bg-light-blue dib br3 pa3 ma3 grow">
        <img  alt="Robots" src={`https://robohash.org/${id}?200x200`}/>
        <div>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    </div>
    )
};

export default Card;
