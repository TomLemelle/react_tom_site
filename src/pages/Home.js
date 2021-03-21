import React from 'react';
import Biography from '../components/Biography';
import HeroBanner from '../components/HeroBanner';
import Job from '../components/Job';
import Navigation from '../components/Navigation';
import Separator from '../components/Separator';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroBanner />
            <Separator title="Présentation" description="Vidéo / Biographie / Développement web" />
            <Biography />
            <Job />
        </>
    );
};

export default Home;