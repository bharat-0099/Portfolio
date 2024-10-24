import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; 
import Home from './Home'; // If you have a Home component

const Main = () => {
    return (
        <Router>
            <Switch>
                
                <Route path="/app" component={App} />
                {/* Add other routes as needed */}
            </Switch>
        </Router>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
