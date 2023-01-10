import { Children, useState } from 'react';
import styles from '../styles/TaskItem.module.scss'
import Task from '../utils/models/Task';
import { taskProps } from '../utils/types/task';

type Props = {
    task: Task,
    handleClick: (id:number)=>void;
}
export default function TaskChildren({task, handleClick}: Props) {
    function handleChildrenClick(){
        handleClick(task.id)
    }
  return (
        <div className={styles.taskItem}>
            <>
                {task.children.map((child,index)=>(
                    <div key={index}>
                        <div className={styles.childrenSection}>
                            <input type="checkbox" name={child.name+child.id} id="completed" checked={child.isDone} />
                            <p>{child.name}</p>
                            <p>{child.deadline}</p>
                        </div>
                        <div className={styles.section}>
                            <p onClick={()=>handleChildrenClick()}>See more...</p>
                            <p>i</p>
                            <p>i</p>
                        </div>
                    </div>
                ))}
            </>
        </div>
  )
}