import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './../../../AuthContext';
import styles from './Nav.module.css';
import DropdownMenu from './../../routes/MenuHome';
import LogoC from './../../../assets/images/LOGOCOCON.png';

function Header() {
    const { isLoggedIn } = useAuth(); // Pegar o estado de login do contexto

    return (
        <>
            <header className={styles.HeaderStyle}>
                <div className={styles.logoContainer}>
                    <img src={LogoC} alt="Logo_ComCom" className={styles.logo} />
                    <span className={styles.consumoConsciente}>CONSUMO CONSCIENTE</span>
                </div>
                <nav className={styles.nav}>
                    <ul className={styles.navEstilo}>
                        <li className={styles.item}><Link to="/">HOME</Link></li>
                        <li className={styles.item}><DropdownMenu /></li>
                        {isLoggedIn ? (
                            <li className={styles.item}><Link to="/MinhaConta">MINHA CONTA</Link></li>
                        ) : (
                            <li className={styles.item}><Link to="/LoginPage">LOGIN</Link></li>
                        )}
                        <li className={styles.item}><Link to="/QuemSomos">QUEM SOMOS</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;
