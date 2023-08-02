import styles from './Card.module.css';
import{FaHtml5, FaCss3Alt, FaJs, FaReact} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
function Card({name, description, html_url}){
    return(
        <section className={styles.card}>
            <h3>
                {name}
            </h3>
            <p>
                {description}
            </p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                <FaHtml5/>
                <FaCss3Alt/>
                <FaJs/>
                <FaReact/>
                </div>
                <a href={html_url} target="_blank" rel="noopenner  noreferrer"className={styles.botao}>
                    <FaArrowCircleRight/>
                </a>
            </div>
        </section>
    )
}

export default Card;
