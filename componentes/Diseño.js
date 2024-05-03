// Diseno.js
import Section from './Section';
import ProjectCard from './ProjectCard';
import proyectos from '@/data/proyectos';

const Diseno = () => {
  const proyectosDiseno = proyectos.diseno;

  return (
    <Section id="diseno" title="Diseño">
      {proyectosDiseno.map(proyecto => (
        <ProjectCard key={proyecto.id} proyecto={proyecto} />
      ))}
    </Section>
  );
};

export default Diseno;
