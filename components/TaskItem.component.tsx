import { Children, useState } from 'react';
import styles from '../styles/TaskItem.module.scss'
import Task from '../utils/models/Task';
import { taskProps } from '../utils/types/task';
import TaskChildren from './TaskChildren';

type Props = {
    task: Task,
    handleClick: (id:number)=>void;
    color: string;
}
export default function TaskItem({task, handleClick, color}: Props) {
    
    let [displayChildren, setDisplayChildren] = useState(false)

    function getPercentage(task: taskProps): number{
        let counter = 0;
        task.children?.map(child=>{
            if(child.isDone){
                counter++
            }
        })
        return task.children?Math.floor((counter/task.children.length)*100):0
    }
    function handleItemClick(){
        setDisplayChildren(!displayChildren)
    }
  return (
        <div className={styles.taskItem} onClick={()=>handleItemClick()}>
            <div className={styles.wrapper}>
                <div className={styles.section}>
                    <input type="checkbox" name={task.name+task.id} id="completed" checked={task.isDone} />
                    <p>{task.name}</p>
                    <p>{task.deadline}</p>
                    <p className={color}>{getPercentage(task)}%</p>
                </div>
                <div className={styles.section}>
                    <p>See more...</p>
                    <p>i</p>
                    <p>i</p>
                </div>
            </div>
            <div className={styles.children}>
                <>
                    {displayChildren?(
                        <TaskChildren task={task} handleClick={handleClick} />
                    ):<></>}
                </>
            </div>
        </div>
  )
}
