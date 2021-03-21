import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Rgpd from '../pages/Rgpd';
import NotFound from '../pages/NotFound';


const CustomRouter = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mentions-légales" exact component={Rgpd} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
};

export default CustomRouter;