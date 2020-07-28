import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';
import './styles.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">=
            <Link to="/">
               <img className="Logo" src={Logo} alt="logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro-videos">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;