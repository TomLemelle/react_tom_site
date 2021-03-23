import React from 'react';
import Biography from '../components/Biography';
import HeroBanner from '../components/HeroBanner';
import Job from '../components/Job';
import Internship from '../components/milestone/Internship';
import Navigation from '../components/Navigation';
import Separator from '../components/Separator';
import Skills from '../components/Skills';
import Training from '../components/Training';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroBanner />
            <Separator title="Présentation" description="Vidéo / Biographie / Développement web" />
            <Biography />
            <Job />
            <Separator title="Compétences" description="Logiciel" />
            <Skills />
            <Separator title="Formations" description="Écoles" />
            <Training />
            <Separator title="Expériences" description="Stages" />
            <Internship />
        </>
    );
};

export default Home;