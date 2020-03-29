class TaskService {

    constructor() {
        this.tasks = [
            {
                id: 1,
                description: "Tarefa 1",
                whenToDo: "2030-01-01",
                done: false
            },
            {
                id: 2,
                description: "Tarefa 2",
                whenToDo: "2030-01-02",
                done: true
            },
            {
                id: 3,
                description: "Tarefa 3",
                whenToDo: "2030-01-03",
                done: false
            }
        ]
    }

    list() {
        return this.tasks;
    }

    delete(id) {
        this.tasks = this.tasks.filter(value => value.id !== id);
    }

    save(task) {
        if (task.id !== 0) {
            this.tasks = this.tasks.map(t => t.id !== task.id ? t : task);
        } else {
            let newId = Math.max(...this.tasks.map(t => t.id)) + 1;
            task.id = newId;
            this.tasks.push(task);
        }
    }

    load(taskId) {
        return this.tasks.filter(t => t.id === taskId)[0];
    }
}

export default new TaskService();