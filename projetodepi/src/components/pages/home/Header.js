// import Nav from './../../routes/Nav';
//import styles from './Header.module.css';
import styles from './Nav.module.css';
import DropdownMenu from './../../routes/MenuHome';
import { Link } from 'react-router-dom';
import LogoC from './../../../assets/images/LOGOCOCON.png'

function Header (){
    return(
        <>
        <header className={styles.HeaderStyle}>
        
        <div className={styles.logoContainer}>
    <img src={LogoC} alt="Logo_ComCom" className={styles.logo} />
    <span className={styles.consumoConsciente}>CONSUMO CONSCIENTE</span>
      </div>
        <nav className={styles.nav}>         
        <ul className={styles.navEstilo}>
        <li className={styles.item}><Link to="/">HOME</Link></li>
        <li className={styles.item}><DropdownMenu/></li>
        <li className={styles.item}><Link to="/LoginPage">LOGIN</Link></li>
        <li className={styles.item}><Link to="/QuemSomos">QUEM SOMOS</Link></li>

      </ul>          
        </nav>
        </header>
        </>
        
    )
}
export default Header;

