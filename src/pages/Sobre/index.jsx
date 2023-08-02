import styles from "./Sobre.module.css";
import avatar from "./images/Avatar.jpg";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import react from "./images/icon-react.svg";
import js from "./images/icon-js.svg";
import node from "./images/icon-node.svg";
import Header from '../../components/Header'
import Footer  from'../../components/Footer'
import Container from '../../components/Container'


function Sobre() {
  return (
    
    <section className={styles.sobre}>
    <Header/>
    <Container>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
            <div className={styles.textos}>
                <h2>Sobre</h2>
                    <p>
                    Sou <span>Rafael Schmaike de Morais</span>
                    <br />
                    <strong>Dev Front End</strong>
                    </p>
                    <p>Aprendendo aplicações web desde 2022.</p>
                    <p>Fascinado pela capacidade de transformar idéias em soluções digitais.</p>
                <p>Desenvolvendo aplicações de Front End.</p>
        </div>
      </div>

      <div className={styles.techs}>
        <h3>Techs</h3>
            <div className={styles.icones}>
                <img src={html} alt="Ícone do HTML" />
                <img src={css} alt="Ícone do CSS" />
                <img src={js} alt="Ícone do JS" />
                <img src={react} alt="Ícone do REACT" />
                <img src={node} alt="Ícone do NODE" />
            </div>
      </div>
      </Container>
      <Footer/>
    </section>
  );
}

export default Sobre;
