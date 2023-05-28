import React, { useState, useEffect } from 'react';
import ProjectForm from './components/ProjectForm';
import TaskForm from './components/TaskForm';
import TaskListing from './pages/TaskListing';
import ProjectListing from './pages/ProjectListing';
import { AppBar, Box, Container, Grid, Toolbar, Typography } from '@mui/material';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return [value, updateValue];
};

const App = () => {
  const [projects, setProjects] = useLocalStorage('projects', []);
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [selectedProject, setSelectedProject] = useState('');

  const addProject = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const addTask = (task) => {
    const updatedTask = { ...task, project: selectedProject };
    setTasks([...tasks, updatedTask]);
  };

  return (
    <Container>
      <AppBar sx={{ position: 'sticky' }}>
        <Toolbar>
          <Typography>Time Tracking App</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ marginTop: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectForm onSubmit={addProject} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <TaskForm
              projects={projects}
              selectedProject={selectedProject}
              onSubmit={addTask}
              setSelectedProject={setSelectedProject}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProjectListing
              projects={projects}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          </Grid>
          <Grid item xs={12}>
            <TaskListing tasks={tasks} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default App;
