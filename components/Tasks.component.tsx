import styles from '../styles/Tasks.module.scss'
import { ScriptProps } from 'next/script'
import { useEffect, useState } from 'react';
type Props = {
    tasks: Task[]
}
export default function Tasks({tasks}: Props) {
    function getPercentage(task: Task): number{
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
        <ul>
            <h2>Main Tasks</h2>
            <div className={styles.categories}>
                <p>Task</p>
                <p>Deadline</p>
                <p>Completion</p>
            </div>
            {tasks.map((task: Task, index: number)=>{
            let color = getPercentage(task)?getPercentage(task)>50?"green":"yellow":"red"    
            return (
               <li>
                    <p>{task.name}</p>
                    <p>{task.deadline}</p>
                    <p className={color}>{getPercentage(task)}%</p>
               </li> 
            )})}
        </ul>
    </div>
  )
}
