// import { Task, Task } from "./types/task"

import Task from "./models/Task";
import { taskProps } from "./types/task";

function db(){

    let data:Task[] = [
        {
            id: 0,
            description: "",
            name: "Task1",
            parent: NaN,
            deadline: "",
            isDone: false,
            childrenSimplified: [2, 1],
            children: []
        },
        {
            id: 1,
            description: "",
            name: "Task2",
            parent: 0,
            deadline: "",
            isDone: true,
            children: [],
            childrenSimplified: [],
        },
        {
            id: 2,
            description: "",
            name: "Task3",
            parent: 0,
            children: [],
            childrenSimplified: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 3,
            description: "",
            name: "Task4",
            children: [],
            childrenSimplified: [],
            isDone: false,
            deadline: "",
            parent: NaN
        },
        {
            id: 4,
            description: "",
            name: "Task5",
            parent: 3,
            children: [],
            childrenSimplified: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 5,
            description: "",
            name: "Task6",
            parent: 3,
            children: [],
            childrenSimplified: [],
            isDone: false,
            deadline: "",
        },
        {
            id: 6,
            description: "",
            name: "Task6",
            children: [],
            childrenSimplified: [],
            isDone: false,
            deadline: "",
            parent: NaN
        },
        {
            id: 7,
            description: "",
            name: "Task6",
            parent: 6,
            children: [],
            childrenSimplified: [],
            isDone: true,
            deadline: "",
        },
        {
            id: 8,
            description: "",
            name: "Task6",
            parent: 6,
            children: [],
            childrenSimplified: [],
            isDone: true,
            deadline: "",
        },
        {
            id: 9,
            description: "",
            name: "Task6",
            parent: 6,
            children: [],
            childrenSimplified: [],
            isDone: false,
            deadline: "",
        },
    ]
    function getData():Task[]{
        return data
    }
    function getChildrenOf(id: number):Task[]{
        let children:Task[] = [];
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
    function addTask(task:taskProps):Task{
        let newTask: Task = new Task({id: data.length, name: ""});
        try {
            task.id = data.length;

            if(task.parent){
                data[task.parent].childrenSimplified.push(task.id)
            }
            if(!task.children){
                task.children = []
            }
            newTask = new Task(task)
            data.push(newTask)
            return newTask
        } catch (error) {
            console.log(` Error trying to add task  ` + error)
            return newTask
        }
    }
    function removeTaskById(id: number):Task {
        let copy:Task = new Task({id: data.length, name: ""});
        try {
            data.map((task, i)=>{
                copy = task
                if(task.id === id){
                    data.splice(i, 1)
                }
                if(task.childrenSimplified.includes(id)){
                    task.childrenSimplified.splice(task.childrenSimplified.indexOf(id), 1)
                }
            })
            return copy
        } catch (error) {
            console.log(` Error trying to remove task  ` + error)
            return copy
        }
    }
    function getTaskById(id: number): Task{
        let taskWithChild:Task = new Task({id, name: ""});
        try {
            let filtered = data.filter(task=>task.id === id)[0]
            taskWithChild = new Task(filtered)
            filtered.childrenSimplified.map(child=>{
                filtered.children.push(data[child])
            })
            taskWithChild.children = getChildrenOf(taskWithChild.id)
    
            console.log(taskWithChild)
            return taskWithChild   
        } catch (error) {
            console.log(` Error trying to remove task  ` + error)
            return taskWithChild
        }
    }
    function modifyTask(id: number, props: taskProps): Task{
        let modifiedTask: Task = new Task({id, name: ""})

        try {
            data[id] = new Task(props);
            modifiedTask = data[id];
            return modifiedTask;
        } catch (error) {
            console.log(` Error trying to modify task  ` + error)
            return modifiedTask
        }
    }

    return {
        getData,
        getChildrenOf,
        addTask,
        removeTaskById,
        getTaskById,
        getInitialData,
        modifyTask
    }
}

export default db()