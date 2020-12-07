class LS {

    clearTasks() {
        //get person data from Local Storage
        let task;
        //if data not exists
        if (localStorage.getItem('task') === null) {
            task = [];
        } else {
            //data is exists
            //set empty data to Local Storage
            task = [];
            localStorage.setItem('task', JSON.stringify(task));
            //return true
            return true;
        }
    }

    clearTasks() {
        localStorage.clear();
        return true;
    }




}
