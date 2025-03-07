//This is the array to store the tasks
        let tasksHolder = [];


//This is to getthe  DOM elements
const formOfTask = document.getElementById('formOfTask');
                const listOftask = document.getElementById('listOftask');


//This is the priority of list
        const priorityOrder = {
   'High': 1,
   'Medium': 2,
   'Low': 3 
 };


//This is the function to sort and run tasks
        function runTasks() {
   //This is to sort the tasks by priority
   tasksHolder.sort((a, b) => priorityOrder[a.priorityRun] - priorityOrder[b.priorityRun]);
  
   //To remove list
listOftask.innerHTML = '';
  
   //This is to sort and run all tasks, like rendering it
   tasksHolder.forEach(task => {
       const li = document.createElement('li');
li.className = 'list-group-item d-flex justify-content-between align-items-center';
      
       //This is to ppdate html's li
       li.innerHTML = `
           <div> <span class="task-text ${task.statusRun === 'completed' ? 'task-completed' : ''}">${task.titleRun} - Priority: ${task.priorityRun}</span>
           </div><div>
               <button class="btn btn-outline-success btn-sm completeButton">Complete</button>
               <button class="btn btn-outline-danger btn-sm removeButton">Remove</button> </div>
     `;


       //This is for the complete button and its event listener
       li.querySelector('.completeButton').addEventListener('click', function() {
    const textInTask = li.querySelector('.task-text');
           task.statusRun = task.statusRun === 'completed' ? 'pending' : 'completed';
 textInTask.classList.toggle('task-completed');
       });


       //This is for the remove button and its event listener
       li.querySelector('.removeButton').addEventListener('click', function() {
           // Remove task from array
           tasksHolder = tasksHolder.filter(t => t !== task);
           runTasks();
});


       listOftask.appendChild(li);
                 });
}


//This is the event listener for the form
formOfTask.addEventListener('submit', function(anything) {
    anything.preventDefault();


   //This is to get the values of the form
   const titleRun = document.getElementById('task-title').value;
         const priorityValue = document.getElementById('task-priority:').value;
            const statusRun = document.querySelector('input[name="task-status"]:checked').value;


   //This is to make and add the task to the form
   tasksHolder.push({
       titleRun: titleRun,
       priorityRun: priorityValue,
                 statusRun: statusRun
            });


   runTasks();
//Run the program again
   formOfTask.reset();
                });
