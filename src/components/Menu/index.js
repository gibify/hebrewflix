import React from 'react';
import Logo from '../../assets/Logo.svg';
import './styles.css'
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">=
            <a href="/">
               <img className="Logo" src={Logo} alt="logo"/>
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;