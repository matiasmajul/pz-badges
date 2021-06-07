import React from 'react';
import './styles/Navbar.css';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-menu">
                    <div className="Navbar__logo">
                        <img src="" alt="Logo Platzi" />

                    </div>
                    <div className="Navbar__menu">
                        <ul className="Navbar__lenguage">
                            <li>ES</li>
                           
                        </ul>
                        <ul className="Navbar__nav">
                            <li><a href="/">Cursos</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">FAG</a></li>
                            <li><a href="/">Horarios</a></li>
                            <li><a href="/">Live</a></li>
                        </ul>
                        <button type="button" onClick={this.handleClick} className="btn-sesion">Inicia sesión</button>
                    </div>
                </div>
                <div className="container-fluid">
                    <Link className="Navbar__brand" to="/">
                        <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                        <span className="fw-light">Platzi</span>
                        <span className="fw-bold">Conf</span>
                    </Link>
                </div>
            </div>);
    }
}

export default Navbar;