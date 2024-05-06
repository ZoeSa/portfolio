// Inicio.js, Programacion.js, Diseno.js, SobreMi.js
import style from '../Styles/section.module.css'

const Section = ({ id, title, className, children }) => {
    return (
      <section id={id} className={className}>
        <h2 className={style.title}>{title}</h2>
        {children}
      </section>
    );
  };
  
  export default Section;
  