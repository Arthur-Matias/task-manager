import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Card from '../components/Card.component'
import Tasks from '../components/Tasks.component'
import { useEffect, useState } from 'react'
import Task from '../utils/models/Task'

export default function Home() {
  const tasksUrl = "/api/tasks"
  const [currTask, setCurrTask] = useState(new Task({
    id: NaN,
    parent: NaN,
    name: "Mock task"
  }))
  const [tasks, setTasks] = useState<Task[]>([currTask]);
  const [backBtnStatus, setBackBtnStatus] = useState(tasks.length > 0);

  useEffect(() => {
    fetch(tasksUrl + "/initial")
      .then(res => res.json())
      .then((resTask: Task) => {

        console.log(resTask)
        setTasks([resTask])
        setCurrTask(resTask)
        setBackBtnStatus(tasks.length <= 1)
        console.log(currTask)
      })
  }, [])

  function handleTaskItemClick(id: number) {
    fetch(`${tasksUrl}/${id}`)
      .then(res => res.json())
      .then((resTask: Task) => {

        let copy = tasks
        if (copy.indexOf(resTask) === -1) {
          copy.splice(0, 0, resTask)
          console.log(copy)
          setTasks([...new Set(copy)])
          setCurrTask(tasks[0])
          setBackBtnStatus(tasks.length <= 1)
        }

      })
  }
  function handleBackClick() {
    let copy = tasks
    copy.splice(0, 1)
    setTasks([...new Set(copy)])
    setCurrTask(tasks[0])
    setBackBtnStatus(tasks.length <= 1)
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.tasks}>
          <Card>
            <Tasks tasks={currTask} backBtnEnabled={backBtnStatus} handleTaskItemClick={handleTaskItemClick} handleBackClick={handleBackClick} />
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
