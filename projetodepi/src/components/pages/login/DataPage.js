import React, { useState } from 'react';
import styles from './DataPage.module.css';

function UserProfile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEnderecoChange = (e) => {
    setEndereco(e.target.value);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados atualizados para o servidor
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Endereço:', endereco);
    console.log('Foto:', photo);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className={styles.userProfileContainer}>
      <h1 className={styles.profileTitle}>MEU PERFIL</h1>
      <div className={styles.profilePhotoContainer}>
        {preview ? (
          <img src={preview} alt="Foto de Perfil" className={styles.profilePhoto} />
        ) : (
          <div className={styles.placeholderPhoto}>Foto de Perfil</div>
        )}
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.profileName}>NOME: {name || ''}</p>
        <p className={styles.profileEmail}>EMAIL: {email || ''}</p>
        <p className={styles.profileEndereco}>ENDEREÇO: {endereco || ''}</p>
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit} className={styles.profileForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="endereco" className={styles.label}>Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={handleEnderecoChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="photo" className={styles.label}>Foto de Perfil:</label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handlePhotoChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.submitButton}>SALVAR</button>
        </form>
      ) : (
        <button onClick={handleEditClick} className={styles.submitButton}>ALTERAR DADOS</button>
      )}
    </div>
  );
}

export default UserProfile;
