import React from 'react';

// carousel img
import image1 from "../assets/developpement.png";


const Skills = () => {


    return (
        <section className="skills">
            <div className="software-carousel">
                <img src={image1} className="sliderimg" alt=""/>
            </div>
            <div className="software-skills">
                <ul className="list-skills">
                    <li>
                        <i className="fa fa-camera"></i>
                        <span className="span-skills">Première pro</span>
                        <p>Logiciel de montage vidéo / étalonnage (post production).</p>
                    </li>
                    <li>
                        <i className="fa fa-camera"></i>
                        <span className="span-skills">After Effects</span>
                        <p>Logiciel d'éditing, effets visuels (post-production).</p>
                    </li>
                    <li>
                        <i className="fa fa-camera"></i>
                        <span className="span-skills">Photoshop &copy; Lightroom</span>
                        <p>Logiciel de retouche photo / design / montage photo.</p>
                    </li>
                    <li>
                        <i className="fa fa-desktop"></i>
                        <span className="span-skills">Langage de développement web</span>
                        <p>Langage de programmation web, utilisé pour la création de site internet.</p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Skills;