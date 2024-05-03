// SobreMi.js
import Section from './Section';

const SobreMi = () => {
  return (
    <Section id="sobre-mi" title="Sobre mí">
      <div className="about-me-content">
        <h3>Mi Presentación</h3>
        <p>Breve descripción sobre ti, tus habilidades, experiencia, pasiones, etc.</p>
        <h3>Mis Habilidades</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          {/* Agrega más habilidades según sea necesario */}
        </ul>
        {/* Puedes agregar más contenido sobre ti, como tu educación, experiencia laboral, etc. */}
      </div>
    </Section>
  );
};

export default SobreMi;
