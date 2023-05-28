import React from 'react';

const ProjectList = ({ projects, selectedProject, setSelectedProject }) => {
  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <h2>Project List</h2>
      {projects.length === 0 ? (
        <p>No projects available</p>
      ) : (
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => handleProjectSelect(project)}
              className={selectedProject === project ? 'selected' : ''}
            >
              {project}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProjectList;
