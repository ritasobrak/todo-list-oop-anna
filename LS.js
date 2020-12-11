class LS {
    saveTask(task) {
        // get tasks data from Local Storage
        let tasks;
        // if data not exists
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            // data is exists
            // get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks() {
        // get task data from Local Storage
        let tasks;
        // if data not exists
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            // data is exists
            // get them from Local Storage
            tasks = JSON.parse(localStorage.getItem('tasks'));
        }
        return tasks;
    }

    removeTask(name) {
        //get all data from LS
        const tasks = this.getTasks();
        console.log(tasks);
        //control each task
        tasks.forEach(function (task, index) {
            if (task.task === name) {
                tasks.splice(index, 1);
            }
        });

        //set up data on LS
        localStorage.setItem('tasks', JSON.stringify(tasks));
        //return true
        return true;
    }

    clearTasks() {
        //get task data from Local Storage
        let tasks;
        //if data not exists
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            //data is exists
            //set empty data to Local Storage
            tasks = [];
            localStorage.setItem('tasks', JSON.stringify(tasks));
            localStorage.clear();
            //return true
            return true;
        }

    }

}

