import React from 'react';
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AccueilPage from './pages/AcueilPage';
import RoulettePage from './pages/RoulettePage';
import { HashRouter, Route, Switch, withRouter } from "react-router-dom";

// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.css';

// start the Stimulus application
import '../bootstrap';
import PanierPage from './pages/PanierPage';


const App = () => {

    const NavbarWithRouter = withRouter(Navbar);

    return (

    <HashRouter>
    <main className="container pt-5">
    <NavbarWithRouter />
        <Switch>
        <Route path="/panier" component={PanierPage} />
        <Route path="/roulette" component={RoulettePage} />
            <Route path="/" component={HomePage} />
        </Switch>
    </main>
    </HashRouter>
    );
};

const rootElement = document.querySelector('#app');
ReactDOM.render(<App />, rootElement);