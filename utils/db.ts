// import { Task, TaskSimplified } from "./types/task"

function db(){

    let data: TaskSimplified[] = [
        {
            id: 0,
            description: "",
            name: "Task1",
            parent: undefined,
            deadline: "",
            isDone: false,
            children: [2, 1]
        },
        {
            id: 1,
            description: "",
            name: "Task2",
            parent: 0,
            deadline: "",
            isDone: true,
            children: []
        },
        {
            id: 2,
            description: "",
            name: "Task3",
            parent: 0,
            children: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 3,
            description: "",
            name: "Task4",
            children: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 4,
            description: "",
            name: "Task5",
            parent: 3,
            children: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 5,
            description: "",
            name: "Task6",
            parent: 3,
            children: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 6,
            description: "",
            name: "Task6",
            children: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 7,
            description: "",
            name: "Task6",
            parent: 6,
            children: [],
            isDone: true,
            deadline: "",
        },
        {
            id: 8,
            description: "",
            name: "Task6",
            parent: 6,
            children: [],
            isDone: true,
            deadline: "",
        },
        {
            id: 9,
            description: "",
            name: "Task6",
            parent: 6,
            children: [],
            isDone: false,
            deadline: "",
        },
    ]

    function getData(): TaskSimplified[]{
        return data
    }
    function getChildrenOf(id: number): Task[]{
        let children: Task[] = [];
        data.map(task=>{
            if(task.parent === id){
                children.push(task)
            }
        })
        return children
    }
    function getInitialData():Task[]{
        let initialTasks = data.filter(task=>isNaN(task.parent))
        initialTasks.map(task=>{
            task.children = getChildrenOf(task.id)
        })
        return initialTasks
    }
    function addTask(task: Task){
        try {
            task.id = data.length;

            if(task.parent){
                data[task.parent].children.push(task.id)
            }
            if(!task.children){
                task.children = []
            }
            data.push(task)
            return true
        } catch (error) {
            console.log(` Error trying to add task  ` + error)
            return false
        }
    }
    function removeTaskById(id: number): TaskSimplified {
        let copy: TaskSimplified = {id: 0, name:""};
        try {
            data.map((task, i)=>{
                copy = task
                if(task.id === id){
                    data.splice(i, 1)
                }
                if(task.children?.includes(id)){
                    task.children.splice(task.children.indexOf(id), 1)
                }
            })
        } catch (error) {
            console.log(` Error trying to remove task  ` + error)
            return copy
        }
        return copy
    }
    function getTaskById(id: number){
        try {
            let taskWithChild: Task = data.filter(task=>task.id === id)[0]
        
            taskWithChild.children = getChildrenOf(taskWithChild.id)
    
            console.log(taskWithChild)
            return taskWithChild   
        } catch (error) {
            console.log(` Error trying to remove task  ` + error)
            return { message: "error"}
        }
    }

    return {
        getData,
        getChildrenOf,
        addTask,
        removeTaskById,
        getTaskById,
        getInitialData
    }
}

export default db()