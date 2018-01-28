import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

class ImgGrid extends React.Component {
  render() {
    return (
      <div className="row center">
          <Link to="/epigeec">
            <img alt="EpiGeEC" src="img/epigeec.png" height="600" width="600" />
          </Link>
          <Link to="/epiml">
            <img alt="Epi_Ml" src="img/epi_ml.png" height="600" width="600" />
          </Link>
          <br />
          <Link to="/genap">
            <img alt="EpiGeEC" src="img/genapLogo.png" height="600" width="600" />
          </Link>
          <Link to="/candig">
            <img alt="EpiGeEC" src="img/CanDIG_1_3-2.png" height="205" width="668" />
          </Link>
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <span>Jonathan Laperle</span>
        <NavLink to='/contact' activeClassName="active">Contact me</NavLink>
        <NavLink exact to='/' activeClassName="active">Projects</NavLink>
      </div>
    );
  }
}

class Portfolio extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <ImgGrid />
      </div>
    );
  }
}

class ContactMe extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="center">
          <h1>ABOUT ME</h1>
        </div>
      </div>
    );
  }
}

class Epigeec extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="center">
          <h1>EpiGeEC</h1>
        </div>
      </div>
    );
  }
}

class Epiml extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="center">
          <h1>Epi_ML</h1>
        </div>
      </div>
    );
  }
}

class Genap extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="center">
          <h1>GenAP</h1>
        </div>
      </div>
    );
  }
}

class Candig extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="center">
          <h1>CanDIG</h1>
        </div>
      </div>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Portfolio}/>
          <Route exact path="/contact" component={ContactMe}/>
          <Route exact path="/epigeec" component={Epigeec}/>
          <Route exact path="/epiml" component={Epiml}/>
          <Route exact path="/genap" component={Genap}/>
          <Route exact path="/candig" component={Candig}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
