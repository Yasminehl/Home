import React from 'react';


function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          <div className="col-lg-2">
          <img className="img-fluid" src="/src/assets/img/nemo.png" alt="Nemo Logo" />

            </div>
          
        </a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#signup">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
