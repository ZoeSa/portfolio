// Programacion.js
import Section from './Section';
import ProjectCard from './ProjectCard';
import proyectosData from '../data/proyectos';

const Programacion = () => {
  const proyectosProgramacion = proyectosData.programacion;

  return (
    <Section id="programacion" title="Programación">
      {proyectosProgramacion.map(proyecto => (
        <ProjectCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </Section>
  );
};

export default Programacion;
