import styles from '../styles/Tasks.module.scss'
import Task from '../utils/models/Task';
import { taskProps } from '../utils/types/task';
import TaskItem from './TaskItem.component';

type Props = {
    tasks: Task;
    handleClick: (id:number)=>void;
}
export default function Tasks({tasks, handleClick}: Props) {
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
        <ul>
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
            {tasks.children.map((task: Task, index: number)=>{
            let color = getPercentage(task)?getPercentage(task)>50?"green":"yellow":"red";
            return (
               <li key={"task-item"+index}>
                    <TaskItem color={color} handleClick={handleClick} task={task} key={"task-item"+index}/>
               </li>
            )})}
        </ul>
    </div>
  )
}
