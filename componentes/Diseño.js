// Diseno.js
import Section from './Section';
import ProjectCard from './ProjectCard';
import proyectos from '@/data/proyectos';
import styles from '../Styles/diseño.module.css'

const Diseno = () => {
  const proyectosDiseno = proyectos.diseno;

  return (
    <Section id="diseno" title="Diseño">
      <div className={styles.projectGrid}>
        {proyectosDiseno.map(proyecto => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </Section>
  );
};

export default Diseno;
