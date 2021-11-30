import React from "react";


const NewSingle = ({item}) => (
    <div className="col s4">
        <div className="card medium">
            <div className="card-image">
                <img src={item.urlToImage} alt={item.title}/>
                <span className="card-title">{item.source.name}</span>
            </div>
            <div className="card content pink lighten-4">
                <p>{item.title}</p>
            </div> 
            <div className="card-action pink lighten-4">
                <a href={item.url} target="_blank" rel="noreferrer">Full article</a>
            </div> 
        </div>
    </div>
);

export default NewSingle;