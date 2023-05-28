import React, { useState, useEffect } from 'react';

const ProjectForm = () => {
  const [projectName, setProjectName] = useState('');
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    if (storedProjects) {
      setProjectList(storedProjects);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() !== '') {
      const updatedProjects = [...projectList, projectName];
      setProjectList(updatedProjects);
      localStorage.setItem('projects', JSON.stringify(updatedProjects));
      setProjectName('');
    }
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
};

export default ProjectForm;
