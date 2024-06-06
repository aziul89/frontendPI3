import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styles from './MenuHome.css'

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button className="dropdown-toggle category-button">CATEGORIAS</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className={styles.linkstyle}><Link to="/CategoriaRoupa">Roupas</Link></li>
          <li className={styles.linkstyle}><Link to="/CategoriaCalcado">Calçados</Link></li>
          <li className={styles.linkstyle}><Link to="/CategoriaAcessorio">Acessórios</Link></li>
          <li className={styles.linkstyle}><Link to="/CategoriaCosmetico">Cosméticos</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
