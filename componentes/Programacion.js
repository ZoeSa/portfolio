// Programacion.js
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import proyectosData from '../data/proyectos';
import styles from '../Styles/programacion.module.css';

const Programacion = () => {
  const proyectosProgramacion = proyectosData.programacion;

  return (
    <Section id="programacion" title="Programación" className={styles.section}>
      <div className={styles.projectGrid}>
        {proyectosProgramacion.map(proyecto => (
          <ProjectCard key={proyecto.id} proyecto={proyecto}/>
        ))}
      </div>
    </Section>
  );
};

export default Programacion;
