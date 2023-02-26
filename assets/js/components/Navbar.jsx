import React from 'react'
import {Helmet} from "react-helmet";
import './navbar.css';
import panier from './images/panier-blanc.png';

const Navbar = props =>{
    return ( <nav className='menu-burger' class="navbar navbar-light amber lighten-4 mb-4 navbar-dark bg-dark">
        <div class="container-fluid">
  

    <a class="navbar-brand" href="#home"><img className="logo-tailor-nav"/>Nike</a>

    <a class="navbar-brand" href="#panier"><img className="panier" src={panier} /></a>
  

    <button className='button-nav' class="navbar-toggler first-button" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
      aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation">
      <div class="animated-icon1"><span></span><span></span><span></span></div>
    </button>
  

    <div class="collapse navbar-collapse" id="navbarSupportedContent20">

  

      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#home">Accueil <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#pricing">Tarifs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#rendez-vous">Contact</a>
        </li>
      </ul>
      <Helmet>
              <meta charSet="utf-8" />
              <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
              <script src="burger-menu.js" type="text/javascript" />
              <script src="popup.js" type="text/javascript" />
          </Helmet>
  
    </div>

    </div>
  </nav>
   );

}

export default Navbar;