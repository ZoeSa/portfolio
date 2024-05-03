// Inicio.js, Programacion.js, Diseno.js, SobreMi.js
const Section = ({ id, title, children }) => {
    return (
      <section id={id}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  };
  
  export default Section;
  