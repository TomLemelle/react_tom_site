import React from 'react';

const Biography = () => {
    return (
        <section className="biography">
            <div className="photo">
                <img src="./img/moi.jpg" alt="Tom Lemelle | Vidéaste et développeur web" className="tom" />
            </div>
            <div className="about">
                <h2>
                    Biographie
                    <br />
                    Tom Lemelle | Vidéaste et développeur web
                </h2>
                <p>
                En 2015, j’ai rejoint un baccalauréat professionnel système électronique numérique dans le cadre duquel j’ai effectué des stages d’informatiques, 
                réseaux, webmarketing, web design, audiovisuel, développement web et d’électronique, j’ai beaucoup aimé l’audiovisuel et le développement web, 
                de cette expérience, j’en ai tiré une très bonne expérience professionnel, m’apprenant des choses importantes sur la vie en entreprise, 
                j’ai fait preuve par la suite d’autodidaxie car j’ai continué à me former seul, grâce à internet. J’ai obtenu mon baccalauréat en 2018. 
                J’ai de très bonne compétence en montage vidéo et de bonnes compétences en développement web en langage html et css. 
                En 2018, j’ai travaillé sur des projets personnels en montage vidéo et quelques fois en développement web. En 2019, je me suis dis que rejoindre 
                la Normandie Web School serait une bonne idée, car j’aimais vraiment bien le côté du développement web.
                </p>
            </div>
        </section>
    );
};

export default Biography;