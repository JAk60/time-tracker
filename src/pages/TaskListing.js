import React, { useState, useEffect } from 'react';

const TaskListing = ({ tasks }) => {
  const [dailyTime, setDailyTime] = useState(0);

  useEffect(() => {
    let totalHours = 0;
    tasks.forEach((task) => {
      totalHours += task.timeSpent;
    });
    setDailyTime(totalHours);
  }, [tasks]);

  return (
    <>
      <div>
        <h2>Task List</h2>
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <strong>Project:</strong> {task.project} <br />
                <strong>Task Name:</strong> {task.name} <br />
                <strong>Time Spent:</strong> {task.timeSpent} hours <br />
                <strong>Description:</strong> {task.description}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h1>Daily Total hours</h1>
        {dailyTime > 0 ? <h2>{dailyTime}</h2> : "Zero hours"}
      </div>
    </>
  );
};

export default TaskListing;
