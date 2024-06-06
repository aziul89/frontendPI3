// Segunda etapa do cadastro de usuario
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddressPage.css'; // Importe os estilos necessários
import LogoCONCON from './../../../assets/images/LOGOCOCON.png';

function AddressPage() {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Valide os campos de entrada aqui
        if (address.trim() === '' || city.trim() === '' || zipcode.trim() === '') {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        // Se tudo estiver correto, você pode prosseguir com o cadastro
        navigate('/FinalStep');
    };

    return (
        <div className="address-page">
            <img src={LogoCONCON} alt="Logo" className="logo" />
            <h2>Dados Pessoais</h2>
            <p className="progress-message">Você está quase lá...</p>
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
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default AddressPage;
