import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';
import styles from './Contatos.module.css';
import {SiGmail, SiInstagram, SiGithub, SiWhatsapp, SiLinkedin} from 'react-icons/si';




function Contatos(){
    return(
        <>
            <Header/>
            <Container>
                <section className={styles.contatos}>

                    <h2>Contatos</h2>
                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre.</p>
                    <div className={styles.icones}>
                        <a href='mailto:rafaelschmaiskedemorais@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <SiGmail className={styles.icone}/>
                        </a>

                        <a href='https://www.instagram.com/rafaelschmaiskemorais' target='_blank' rel='noopener noreferrer'>
                            <SiInstagram className={styles.icone} />
                        </a>

                        <a href='https://web.whatsapp.com/send?phone=5543996860943' target='_blank' rel='noopener noreferrer'>
                            <SiWhatsapp className={styles.icone} />
                        </a>

                        <a href='https://github.com/schmaiske' target='_blank' rel='noopener noreferrer'>
                            <SiGithub className={styles.icone} />
                        </a>

                        <a href='https://www.linkedin.com/in/rafaelschmaiskedemorais' target='_blank' rel='noopener noreferrer'>
                            <SiLinkedin  className={styles.icone}/>
                        </a>
                    </div>

                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Contatos
