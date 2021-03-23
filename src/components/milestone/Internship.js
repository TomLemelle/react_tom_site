import React from 'react';
import Milestone from './Milestone';

const Internship = () => {
    return (
        <section className="internship">
            <ul className="milestone">
                <Milestone m2h="keyveo"logoDate="Novembre 2020 - 2022" img="./img/keyveo.jpg" 
                    date="Novembre 2020 - 2022" companie="Keyveo" 
                    fDescription="Alternant développeur web à l'entreprise Keyveo."
                    sDescription="Keyveo est une entreprise innovante spécialisée dans les projets 3D (3D/4D, Temps réel, Réalité Augmentée, Réalité Virtuelle)."
                />
                <Milestone m2h="mfs" logoDate="Mai 2020 - Aout" img="./img/mfs.jpg" 
                    date="Mai 2020 - Aout" companie="Maisons France Style" 
                    fDescription="Stagiaire &amp; Salarié développeur web à l'entreprise MFS."
                    sDescription="Maisons France Style est une entreprise de construction de maisons régionales depuis 1993."
                />
                <Milestone m2h="adl" logoDate="Septembre 2019" img="./img/ADL.png" 
                    date="Septembre 2019" companie="ADLServices" 
                    fDescription="Stagiaire polyvalent à l’entreprise ADLServices."
                    sDescription="Installation de réseaux informatiques / dépannages informatiques."
                />
                <Milestone m2h="linfo" logoDate="17 Semaines en 2018" img="./img/linformatique.png" 
                    date="17 Semaines en 2018" companie="L'Informatique" 
                    fDescription="Stagiaire polyvalent à l’entreprise l’Informatique."
                    sDescription="Dans le le domaine du dépannage informatique et réseau, dans la vente de matériel, de consommable informatique, montage de pc, installation de parc informatique et réseau."
                />
                <Milestone m2h="andchor" logoDate="De Juin à Juillet 2016" img="./img/Andchor.png" 
                    date="SEPTEMBRE 2019" companie="Andchor" 
                    fDescription="Stagiaire développeur polyvalent à l'agence Andchor."
                    sDescription="Agence de communication, développement web, de stratégie marketing, de communication, et d’audiovisuel."
                />
                <Milestone m2h="dentanor" logoDate="Décembre 2015" img="./img/dentanor.png" 
                    date="Décembre 2015" companie="Dentanor" 
                    fDescription="Stagiaire polyvalent à l’entreprise Dentanor."
                    sDescription="Pose de matériels dentaires, revendeur de fournitures dentaires, dépannage de matériels dentaire ( fauteuil pour un patient, un bras-radio, un autoclave, un progiciel ( logiciel pour les professionnel sur ordinateur ))."
                />
            </ul>
        </section>
    );
};

export default Internship;