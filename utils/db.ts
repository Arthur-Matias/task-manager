// import { Task, Task } from "./types/task"

import Task from "./models/Task";
import { taskProps } from "./types/task";

function db(){

    let data:Task[] = [
        new Task({id:0, name:"Task1", childrenSimplified:[2,3], deadline:new Date().toJSON(), description:"",isDone:false,parent:NaN}),
        new Task({id:1, name:"Task2", childrenSimplified:[4,5], deadline:new Date().toJSON(), description:"",isDone:false,parent:NaN}),
        new Task({id:2, name:"Task3", childrenSimplified:[], deadline:new Date().toJSON(), description:"",isDone:false,parent:0}),
        new Task({id:3, name:"Task4", childrenSimplified:[], deadline:new Date().toJSON(), description:"",isDone:false,parent:0}),
        new Task({id:4, name:"Task5", childrenSimplified:[], deadline:new Date().toJSON(), description:"",isDone:false,parent:1}),
        new Task({id:5, name:"Task6", childrenSimplified:[], deadline:new Date().toJSON(), description:"",isDone:false,parent:1}),
    ]
    function getChildrenOf(id: number):Task{
        let tempData = data.find(task=>task.id === id)
        let taskWithChildren:Task = tempData?tempData:new Task({
            id: NaN,
            parent: NaN,
        });
        
        data.map(task=>{
            if(task.parent === id && !isNaN(task.id) && taskWithChildren.children.indexOf(task)<0){
                taskWithChildren.children.push(task)
            }
        })
        return taskWithChildren
    }
    function getInitialData():Task{
        let initialTasks = data.filter(task=>isNaN(task.parent))
        console.log(initialTasks)
        initialTasks.forEach(task=>{
            task = getChildrenOf(task.id)
        })
        return new Task({
            id:NaN,
            name:"Main Tasks",
            children: initialTasks,
            childrenSimplified: [...initialTasks.map(task=>task.id)],
            parent: NaN
        })
    }
    function addTask(task:taskProps):Task{
        let newTask: Task = new Task({id: data.length, name: "", parent: NaN});
        try {
            newTask = new Task(task)
            isNaN(newTask.id)?data.length:newTask.id

            if(newTask.parent){
                data[newTask.parent].childrenSimplified.push(newTask.id)
            }
            data.push(newTask)
            return newTask
        } catch (error) {
            console.log(` Error trying to add task  ` + error)
            return newTask
        }
    }
    function removeTaskById(id: number):Task {
        let copy:Task = new Task({id: NaN, name: "", parent: NaN});
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
        let taskWithChild:Task = new Task({id:NaN, name:"", parent: NaN})
        
        try{
            taskWithChild = getChildrenOf(id)
            console.log(taskWithChild)
            return taskWithChild   
        } catch (error) {
            console.log(` Error trying to remove task  ` + error)
            return taskWithChild
        }
    }
    function modifyTask(id: number, props: taskProps): Task{
        let modifiedTask: Task = new Task({id, name: "", parent: NaN})

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
        getChildrenOf,
        addTask,
        removeTaskById,
        getTaskById,
        getInitialData,
        modifyTask
    }
}

export default db()