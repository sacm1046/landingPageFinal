import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgCard} className="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">{props.titleCard}</h5>
                <p className="card-text">{props.textCard}</p>
            </div>
            <div class="card-footer d-flex justify-content-center">
                <a href="#" class="btn btn-primary">{props.buttonCard}</a>
            </div>
        </div>

    );
}

export default Card;