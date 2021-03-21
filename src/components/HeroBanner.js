import React from 'react';

const HeroBanner = () => {
    return (
        <section className="hero-banner">
            <div className="slider">
                <div className="slide slide1">
                    <div className="caption">
                        <h2>Tom Lemelle</h2>
                        <p>Monteur vidéo</p>
                    </div>
                </div>
                <div className="slide slide2">
                    <div className="caption">
                        <h2>Tom Lemelle</h2>
                        <p>Développeur web</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;