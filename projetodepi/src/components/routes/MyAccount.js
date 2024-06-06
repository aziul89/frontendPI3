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
      <button className="dropdown-toggle category-button">MINHA CONTA</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className={styles.linkstyle}><Link to="/DataPage">Meus Dados</Link></li>
          <li className={styles.linkstyle}><Link to="/Favoritos">Meus Favortios</Link></li>
          <li className={styles.linkstyle}><Link to="/Pedidos">Meus Pedidos</Link></li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
