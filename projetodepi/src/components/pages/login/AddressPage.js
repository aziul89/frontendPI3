// Segunda etapa do cadastro de usuario

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressPage.css'; 
import { useAuth } from '../../../AuthContext';
import LogoCONCON from './../../../assets/images/LOGOCOCON.png';

function AddressPage() {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn) {
            setIsLoggedIn(true); 
        }
    }, [isLoggedIn, setIsLoggedIn]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address.trim() === '' || city.trim() === '' || zipcode.trim() === '') {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        
        navigate('/DataPage');
    };

    return (
        <div className="address-page">
            <img src={LogoCONCON} alt="Logo" className="logo" />
            <div className="address-container">
                <div className="form-wrapper">
                    <h2>DADOS PESSOAIS</h2>
                    <p className="progress-message">Mais um pouco...</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Endereço:</label>
                            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Cidade:</label>
                            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>CEP:</label>
                            <input type="text" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">CADASTRAR</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddressPage;

