import React from 'react';
import styles from './HomePage.module.css';

import LogoReciclar from './../../../assets/images/reciclar.png';
import LogoCoelho from './../../../assets/images/coelho.png';
import LogoArtesanal from './../../../assets/images/artesanal.png';
import LogoVegan from './../../../assets/images/vegan.png';
import SearchIcon from './../../../assets/images/SEARCH_icon.png';

function HomePage() {
    return (
        <>
            <div className={styles.HomePage}>
                <div className={styles.SuperiorContent}>
                    <div className={styles.searchContainer}>
                        <input 
                            type="text" 
                            className={styles.searchInput} 
                        />
                        <img 
                            src={SearchIcon} 
                            alt="Search" 
                            className={styles.searchIcon} 
                        />
                    </div>

                    <div className={styles.CenterContent}>
                        <p>Com a gente<br/> você se torna<br/>  consciente do seu consumo.</p>
                    </div>
                </div>

                <h1 className={styles.valoresTitle}>NOSSOS VALORES</h1>
                <div className={styles.valores}>
                    <img src={LogoCoelho} alt="Cruelty-free" title="Livre de Crueldade" />
                    <img src={LogoVegan} alt="Vegan" title="Vegano" />
                    <img src={LogoReciclar} alt="Recyclable" title="Reciclável" />
                    <img src={LogoArtesanal} alt="Handmade" title="Artesanal" />
                </div>

                <div>
                    <p>
                        <br/>
                    </p>
                </div>
            </div>
        </>
    );
}

export default HomePage;
