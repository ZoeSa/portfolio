// ProjectCard.js
import styles from '../Styles/proyectCart.module.css'

const ProjectCard = ({ proyecto }) => {
  return (
    <div className={styles.projectCard }>
      <div className={styles.imageUrl}>
        <img src={proyecto.imageUrl} alt={proyecto.title} />
      </div>
      <div className={styles.projectInfo}>
        <h3>{proyecto.title}</h3>
        <a href={proyecto.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>Ver código en GitHub</a>
      </div>
    </div>
  );
};

export default ProjectCard;
