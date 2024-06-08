import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import styles from './MenuHome.css';
import Swal from 'sweetalert2';
import { useAuth } from './../../AuthContext'

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Você deseja mesmo sair?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, sair!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setIsLoggedIn(false);
                localStorage.removeItem('user');
                navigate('/LoginPage');
            }
        });
    };

    useEffect(() => {
        const savedState = localStorage.getItem('isLoggedIn');
        if (savedState) {
            setIsLoggedIn(JSON.parse(savedState));
        }
    }, [setIsLoggedIn]);

    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isLoggedIn ? (
                <>
                    <button className="dropdown-toggle category-button">MINHA CONTA</button>
                    {isOpen && (
                        <ul className="dropdown-menu">
                            <li className={styles.linkstyle}><Link to="/DataPage">Meus Dados</Link></li>
                            <li className={styles.linkstyle}><Link to="/Carrinho">Carrinho</Link></li>
                            <li className={styles.linkstyle}><Link to="/Favoritos">Favoritos</Link></li>
                            <li className={styles.linkstyle}><Link to="/Pedidos">Pedidos</Link></li>
                            <li className={styles.linkstyle}>
                                <button className="logout-button" onClick={handleLogout}>Sair</button>
                            </li>
                        </ul>
                    )}
                </>
            ) : (
                <Link to="/LoginPage">Login</Link>
            )}
        </div>
    );
};

export default DropdownMenu;
