function db(){

    let data: Task[] = [
        {
            id: 0,
            description: "",
            name: "Task1",
            parent: undefined,
            children: [2, 1]
        },
        {
            id: 1,
            description: "",
            name: "Task2",
            parent: 0,
            children: []
        },
        {
            id: 2,
            description: "",
            name: "Task3",
            parent: 0,
            children: []
        },
    ]

    function getData(): Task[]{
        return data
    }
    function getChildrenOf(id: number): Task[]{
        return data.filter( task => task.parent == id )
    }
    function addTask(task: Task){
        if(task.parent){
            data[task.parent].children.push(task.id)
        }
        data.push(task)
    }
    function removeTaskById(id: number){
        data.map((tasks, i)=>{
            if(tasks.id === id){
                data.splice(i, 1)
            }
            if(tasks.children.includes(id)){
                tasks.children.splice(tasks.children.indexOf(id), 1)
            }
        })
    }
    function getTaskById(id: number): Task{
        let taskWithChild: Task = data.filter(task=>task.id === id)[0]
        
        taskWithChild.children = getChildrenOf(taskWithChild.id)
        // let t = getChildrenOf(taskWithChild.id)
        
        console.log(taskWithChild)
        return taskWithChild
    }

    return {
        getData,
        getChildrenOf,
        addTask,
        removeTaskById,
        getTaskById
    }
}

export default db()