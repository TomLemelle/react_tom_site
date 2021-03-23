import React from 'react';

const milestone = (props) => {
    return (
        <li className="milestone-item">
            <div className="milestone-logo">
                <span className="milestone-th"></span>
                <h2 className={props.m2h}>{props.logoDate}</h2>
                <img src={props.img} alt="l'informatique" />
            </div>
            <div className="milestone-content">
                <h2>{props.date}</h2>
                <div className="milestone-content-text">
                <h4>{props.companie}</h4>
                <p>{props.fDescription}</p>
                <br />
                <p>{props.sDescription}</p>
                </div>
            </div>
        </li>
    );
};

export default milestone;