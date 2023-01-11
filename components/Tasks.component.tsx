import { useEffect, useState } from 'react';
import styles from '../styles/Tasks.module.scss'
import Task from '../utils/models/Task';
import { taskProps } from '../utils/types/task';
import TaskItem from './TaskItem.component';

type Props = {
    tasks: Task;
    handleTaskItemClick: (id:number)=>void
    handleBackClick: ()=>void,
    backBtnEnabled: boolean
}
export default function Tasks({tasks, handleTaskItemClick, handleBackClick, backBtnEnabled}: Props) {
    const [backBtnDisabled, setBackBtnDisabled] = useState(true)
    // console.log(tasks.parent)
    // console.log(tasks.parent === null && isNaN(tasks.parent))
    function getPercentage(task: taskProps): number{
        let counter = 0;
        task.children?.map(child=>{
            if(child.isDone){
                counter++
            }
        })
        return task.children?Math.floor((counter/task.children.length)*100):0
    }
  return (
    <div className={styles.tasks}>
        <button className={styles.backBtn} disabled={backBtnEnabled} onClick={handleBackClick}>back</button>
        <h2>{tasks.name}</h2>
        <div className={styles.categories}>
            <div></div>
            <div>
                <p>Task</p>
                <p>Deadline</p>
                <p>Completion</p>
            </div>
            <div>

            </div>
        </div>
        <ul>
            {tasks.children.map((task: Task, index: number)=>{
            let color = getPercentage(task)?getPercentage(task)>50?"green":"yellow":"red";
            return (
               <li key={"task-item"+index}>
                    <TaskItem color={color} handleClick={()=>handleTaskItemClick(task.id)} task={task} key={"task-item"+index}/>
               </li>
            )})}
        </ul>
    </div>
  )
}
