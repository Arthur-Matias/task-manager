import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Card from '../components/Card.component'
import Tasks from '../components/Tasks.component'
import { useEffect, useState } from 'react'
import Task from '../utils/models/Task'

export default function Home() {
  const tasksUrl = "/api/tasks"
    let [tasks, setTasks] = useState<Task>(new Task({id:NaN, name:"mock task",parent:NaN}));
    useEffect(() => {
      fetch(tasksUrl+"/initial")
      .then(res => res.json())
      .then((tasks: Task) => setTasks(tasks))
    }, [])

    function handleClick(id: number){
      fetch(`${tasksUrl}/${id}`)
      .then(res => res.json())
      .then((tasks: Task) => setTasks(tasks))
    }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.tasks}>
          <Card>
            <Tasks tasks={tasks} handleClick={handleClick}/>
          </Card>
        </div>
        {/* <div className={styles.calendar}>
          <Card>
          </Card>
        </div>
        <div className={styles.chart}>
          <Card>
          </Card>
        </div>
        <div className={styles.stats}>
          <Card>
          </Card>
        </div>
        <div className={styles.stats2}>
          <Card>
          </Card>
        </div> */}
      </div>
    </>
  )
}
