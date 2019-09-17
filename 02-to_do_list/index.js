const container = new Vue ({
    el: '.container',
    data: {
        tasks: [
            {done: false, task: 'task 1'},
            {done: false, task: 'task 2'},
            {done: false, task: 'task 3'}
        ],
        newTasks: ''
    },
    methods: {
        addNewTask(){
            if(this.newTasks){
                this.tasks.push({
                done: false, task: this.newTasks
            });
            this.newTasks = ''
            }
        },

        taskDone(){
            console.log("task done");
            
        },

        deleteTask(task){
            this.tasks.splice(this.tasks.indexOf(task), 1)
        }
    }
})