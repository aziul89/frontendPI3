// Primeira etapa de cadastro

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import LogoCONCON from './../../../assets/images/LOGOCOCON.png';

function RegisterPage() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setError('Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            setError('As senhas não correspondem.');
            return;
        }
        navigate('/AddressPage');
    };

    return (
        <div className="register-page">
            <img src={LogoCONCON} alt="Logo" className="logo" />
            <div className="register-container">
                <div className="form-wrapper">
                    <h2>CADASTRO</h2>
                    <h3>Você está quase lá...</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Nome de Usuário:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Criar Senha:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Repetir Senha:</label>
                            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">PRÓXIMO</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
