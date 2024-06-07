import React from 'react';
import styles from './../home/QuemSomos.module.css';
import backgroundImage from './../../../assets/images/backgroundAboutUs.png';
import emailIcon from './../../../assets/images/icon_EMAIL.png'; // Importe sua imagem de ícone

function QuemSomos() {
  return (
    <div className={styles.quemSomosContainer}>
      <div className={styles.backgroundImageContainer}>
        <img src={backgroundImage} alt="Imagem de Fundo" className={styles.backgroundImage} />
      </div>
      <div className={`${styles.descricaoContainer} ${styles.descricao}`}>
        <h1 className={styles.titulo}><strong>Quem Somos</strong></h1>
        <p className={styles.descricao}>
          Acreditamos que o consumo consciente é a chave para um futuro mais sustentável e justo.
          Foi com essa visão que criamos a CONCON, uma loja online dedicada a oferecer produtos de alta qualidade, produzidos de forma ética e responsável com o meio ambiente.<br />
          Nossa missão é inspirar e empoderar as pessoas a fazerem escolhas de consumo mais conscientes, que beneficiem tanto elas quanto o planeta.<br />
          Queremos oferecer uma plataforma onde os consumidores possam encontrar produtos que reflitam seus valores e que contribuam para um mundo mais verde e sustentável.<br />
          Bem-vindo à CONCON, onde acreditamos que cada escolha de consumo pode impactar positivamente o mundo ao nosso redor. Buscamos oferecer uma experiência de compra que vai além do simples ato de adquirir produtos; queremos inspirar uma mudança de hábitos, promovendo um estilo de vida mais consciente e sustentável.<br />
          Aqui, você encontrará uma seleção cuidadosamente curada de produtos que são não apenas eco-friendly, mas também de alta qualidade e estilo. De roupas a acessórios e produtos de beleza, cada item foi escolhido para fazer parte da nossa missão de promover um consumo mais consciente e responsável.<br />
          Junte-se a nós nesta jornada rumo a um futuro mais verde e justo. Explore nossa loja, descubra produtos que se alinham com seus valores e faça parte dessa mudança positiva. Obrigado por escolher fazer parte da nossa comunidade consciente!
        </p>
        <div className={styles.contactContainer}>
          <span className={styles.contactLink}>
            <img src={emailIcon} alt="Ícone Email" className={styles.contactIcon} />
            equipe_concon@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
}

export default QuemSomos;
