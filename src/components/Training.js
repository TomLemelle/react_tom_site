import React from 'react';

const Training = () => {
    return (
        <section className="training">
            <div className="nws-training">
                <div className="img-training">
                    <img src="./img/nws.jpg" alt="de l'école Normandie Web School" className="img-school" />
                </div>
                <div className="about-training">
                    <h3>Normandie Web School</h3>
                    <p className="first-p-training">Bachelor Chef de projet digital</p>
                    <p className="second-p-training">En cours de formation à la Normandie Web School pour 3 ans.(2ème année)</p>
                </div>
            </div>
            <div className="lachataigneraie-training">
                <div className="img-training">
                    <img src="./img/lachataigneraie.jpg" alt="de l'école Normandie Web School" className="img-school" />
                </div>
                <div className="about-training">
                    <h3>La Châtaigneraie</h3>
                    <p className="first-p-training">Diplôme national du brevet / Brevet d’études professionnelles / Baccalauréat Professionnel Système Électronique Numérique</p>
                    <p className="second-p-training">De 2014 à 2018, j‘ai obtenu mon diplôme national du brevet, ainsi que mon brevet d’études professionnelles et pour finir 
                    mon baccalauréat professionnel système électronique numérique spécialisation alarme incendie
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Training;