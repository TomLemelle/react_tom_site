import React from 'react';

const Job = () => {
    return (
        <section className="jobs">
            <div className="dev-jobs">
                <div className="jobs-picture dev-picture">
                    <h3>Développement web</h3>
                    <img src="./img/developpeur.jpg" alt="code, Tom Lemelle" className="code"/>
                </div>
                <div className="text-jobs text-dev">
                    <p>
                    La programmation web est la programmation informatique qui permet d’éditer des sites web. 
                    Elle permet la création d’applications, destinée à être déployée sur Internet ou un Intranet, 
                    constituées de pages pouvant prendre différentes formes, notamment : Un ensemble de pages « statiques », 
                    c’est-à-dire dont le contenu n’est pas influencé par l’internaute qui la demande, et qui n’évolue pas 
                    sans une intervention manuelle sur le code. Un ensemble de pages « dynamiques », c’est-à-dire dont le 
                    contenu évolue sans que le code du site web ne soit modifié, soit via l’interaction des utilisateurs, 
                    soit par du calcul. C’est le cas de la très large majorité des sites web depuis le début des années 2000.
                    </p>
                </div>
            </div>
            <hr className="hr" />
            <div className="video-jobs">
                <div className="jobs-picture video-picture">
                    <h3>VIDÉO</h3>
                    <img src="./img/camera.jpg" alt="camera, Tom Lemelle" className="camera"/>
                </div>
                <div className="text-jobs text-video">
                    <p>
                    La programmation web est la programmation informatique qui permet d’éditer des sites web. 
                    Elle permet la création d’applications, destinée à être déployée sur Internet ou un Intranet, 
                    constituées de pages pouvant prendre différentes formes, notamment : Un ensemble de pages « statiques », 
                    c’est-à-dire dont le contenu n’est pas influencé par l’internaute qui la demande, et qui n’évolue pas 
                    sans une intervention manuelle sur le code. Un ensemble de pages « dynamiques », c’est-à-dire dont le 
                    contenu évolue sans que le code du site web ne soit modifié, soit via l’interaction des utilisateurs, 
                    soit par du calcul. C’est le cas de la très large majorité des sites web depuis le début des années 2000.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Job;