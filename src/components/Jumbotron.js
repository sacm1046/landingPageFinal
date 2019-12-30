import React from 'react';
import Card from './Card';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{props.titleJumbotron}</h1>
            <p className="lead">{props.textJumbotron}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{props.buttonJumbotron}</a>
        </div>
    );
}

export default Jumbotron;
