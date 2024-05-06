// SobreMi.js
import Section from './Section';
import styles from '../Styles/sobreMi.module.css'

const SobreMi = () => {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="about-me-content">
        <h3 className={styles.title}>Mi camino profesional</h3>
        <p className={styles.parrafo}>Breve descripción sobre ti, tus habilidades, experiencia, pasiones, etc.</p>
        <h3 className={styles.title}>Mis Habilidades</h3>
        <ul className={styles.parrafo}>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Illustraitor</li>
          <li>Photoshop</li>
          <li>Indesigne</li>
          <li>Wordpress</li>
          
        </ul>
      
      </div>
    </Section>
  );
};

export default SobreMi;
