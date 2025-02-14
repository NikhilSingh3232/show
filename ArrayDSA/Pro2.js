function manageTasks(tasks) {
    // Add Task
    tasks.push("New Task");
    console.log("After Adding Task:", tasks);
  
    // Remove Task
    tasks.pop();
    console.log("After Removing Task:", tasks);
  
    // Complete Task
    tasks.shift();
    console.log("After Completing Task:", tasks);
  
    // Add Priority Task
    tasks.unshift("High Priority Task");
    console.log("After Adding Priority Task:", tasks);
  }
  
  // Example usage:
  let taskList = ["Task 1", "Task 2", "Task 3"];
  manageTasks(taskList);
  