import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './../../../AuthContext'; // Importar o hook de contexto
import './LoginPage.css';
import LogoCONCON from './../../../assets/images/LOGOCOCON.png';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn } = useAuth(); // Pegar a função setIsLoggedIn do contexto

    // Exemplo de autentificação
    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        const trimmedPassword = password.trim();

        if (trimmedUsername !== '' && trimmedPassword !== '') {
            if (trimmedUsername === 'teste' && trimmedPassword === 'teste') {
                setError('');
                setIsLoggedIn(true);
                navigate('/DataPage');
            } else {
                setError('Login inválido. Por favor, tente novamente.');
            }
        } else {
            setError('Por favor, preencha ambos os campos.');
        }
    };

    const handleRegister = () => {
        navigate('/RegisterPage');
    };

    return (
        <div className="login-page">
            <img src={LogoCONCON} alt="Logo" className="logo" />
            <div className="login-container">
                <div className="form-wrapper">
                    <h2 className="form-title">ACESSE SUA CONTA</h2>
                    <form onSubmit={handleSubmit} className="form">
                        <div className="form-group">
                            <label>Login:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Senha:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="button-container">
                            <button type="submit" className="submit-button">ENTRAR</button>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <h3 className="register-title">Não possui uma conta?</h3>
                        <div>
                            <button type="button" className="register-button" onClick={handleRegister}>CADASTRE-SE</button>
                        </div>
                    </form>
                </div>
            </div>
            <p><br /></p>
        </div>
    );
}

export default LoginPage;
