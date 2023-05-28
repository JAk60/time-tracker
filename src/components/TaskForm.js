import React, { useState } from 'react';

const TaskForm = ({ projects, selectedProject, onSubmit, setSelectedProject }) => {
  const [taskName, setTaskName] = useState('');
  const [timeSpent, setTimeSpent] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '' && timeSpent.trim() !== '' && description.trim() !== '' && selectedProject.trim() !== '') {
      const task = {
        project: selectedProject,
        name: taskName,
        timeSpent: parseFloat(timeSpent),
        description: description,
      };
      onSubmit(task);
      setTaskName('');
      setTimeSpent('');
      setDescription('');
    }
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Project:</label>
          <select value={selectedProject} onChange={(e) => setSelectedProject(e.target.value)}>
            <option value="">Select a Project</option>
            {projects.map((project, index) => (
              <option key={index} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Task Name:</label>
          <input type="text" name="taskName" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
        </div>
        <div>
          <label>Time Spent (hours):</label>
          <input type="number" step="0.5" name="timeSpent" value={timeSpent} onChange={(e) => setTimeSpent(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter task description" />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
