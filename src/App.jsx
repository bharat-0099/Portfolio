import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Edu from './Component/Edu/Edu';
import Skills from './Component/Skills/Skills';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import Experince from './Component/Experince/Experince';
import Projects from './Component/Projects/Projects';
import Business from './Component/Business/Business';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Hero} />
                <Route path="/edu" component={Edu} />
                <Route path="/skills" component={Skills} />
                <Route path="/experience" component={Experince} />
                <Route path="/business" component={Business} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
