// ProjectCard.js

const ProjectCard = ({ proyecto }) => {
    return (
      <div className="project-card">
        <img src={proyecto.imageUrl} alt={proyecto.title} />
        <div className="project-info">
          <h3>{proyecto.title}</h3>
          <a href={proyecto.githubLink} target="_blank" rel="noopener noreferrer">Ver código en GitHub</a>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  