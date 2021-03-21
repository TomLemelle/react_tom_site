import React from 'react';

const Separator = (props) => {
    return (
        <section className="separator">
            <h1 className="separator-title">{props.title}</h1>
            <p className="separator-description">{props.description}</p>
            <hr className="hr" />
        </section>
    );
};

export default Separator;