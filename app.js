// define variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('#tasks-list');
const clearBtn = document.querySelector('#clear-tasks');


// define event listeners
// page reload event - get data from Local Storage
document.addEventListener('DOMContentLoaded', getTasks);
// add task to list - submit button
form.addEventListener('submit', addTask);
//remove task from list - fas fa-backspace icon
taskList.addEventListener('click', removeTask);
//clear all tasks from table
clearBtn.addEventListener('click', clearTasks);

// addTask function
function addTask(e) {
    // get value from form
    const taskInput = document.querySelector('#task').value;
    // create new ui object
    const ui = new UI();
    // create new Local Storage object
    const ls = new LS();

    if (taskInput === '') {
        ui.alertMessage("Add task data!", "problem");
    } else {
        // create new task object with form data
        const task = new Task(taskInput);
        // add task object data to html list

        ui.addTaskToTable(task);
        // save task data to Local Storage
        ls.saveTask(task);
        // show ok alert message
        ui.alertMessage("Added task to todo-list!", "ok");
        form.reset();
        e.preventDefault();
    }
}

// get tasks from Local Storage
function getTasks() {
    // create new Local Storage object
    const ls = new LS();
    // create new ui object
    const ui = new UI();
    // get tasks from LS
    const tasks = ls.getTasks();
    // get each task from LS and transform to Task object
    tasks.forEach(function (task) {
        const taskData = new Task(task['task']);
        // create UI object for html list item
        ui.addTaskToTable(taskData);
    });
}

//removeTask function
function removeTask(e) {
    //is click is over icon - over a tag

    if (e.target.parentElement.classList.contains('secondary-content')) {
        if (confirm('Do you want to remove this task?')) {
            e.target.parentElement.parentElement.remove();
            // create new Local Storage object
            const ls = new LS();
            //delete task from LS
            ls.removeTask(e.target.parentElement.parentElement.innerText);
        }
    }
}

//clearContacts
function clearTasks(e) {
    taskList.innerHTML = '';
    //clear contacts from Local Storage
    //create new ui object
    const ui = new UI();
    //create new Local Storage object
    const ls = new LS();
    const isCleared = ls.clearTasks();
    if(isCleared) {
        //add alert about it
        ui.alertMessage("Tasks are cleared", "ok");
    } else {
        ui.alertMessage("Some problems, sorry", "problem");
    }

}






