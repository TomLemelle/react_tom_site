import React from 'react';
import Biography from '../components/Biography';
import HeroBanner from '../components/HeroBanner';
import Job from '../components/Job';
import Internship from '../components/milestone/Internship';
import Navigation from '../components/Navigation';
import Passions from '../components/Passions';
import Separator from '../components/Separator';
import Skills from '../components/Skills';
import Training from '../components/Training';
import Videos from '../components/Videos';

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
            <Separator title="Mes passions" description="Développeur web / Montage vidéo / Street Workout / Gaming" />
            <Passions />
            <Separator title="Mes vidéos" description="Première Pro" />
            <Videos />
            <Separator title="Contact" description="Convaincu ?" />
        </>
    );
};

export default Home;