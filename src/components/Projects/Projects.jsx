import './Projects.css';
import projects from '../../data/projectsData';

function Projects() {
  return (
    <section className="projects">
      <h2 className='projects__title'>/ Our projects</h2>
      <div className="projects-container">
        <div className="projects-items">
          {projects.map((item, index) => (
            <div key={index} className="projects-item">
              {item.type === 'photo' ? (
                <img src={item.url} alt={item.title} className='photo' />
              ) : (
                <video controls className="video">
                  <source src={item.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
