import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Card from '../components/Card.component'
import Tasks from '../components/Tasks.component'
import { useEffect, useState } from 'react'
import Task from '../utils/models/Task'

export default function Home() {
  const tasksUrl = "/api/tasks/initial"
    let [tasks, setTasks] = useState<Task[]>([]);
    useEffect(()=>{
        fetch(tasksUrl, {method: "get"})
            .then(data=>data.json())
            .then((tasks:Task[])=>{
                setTasks(tasks)
            })
            .catch(error=>{
                console.log(error)
            })

    })
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.content}>
        <div className={styles.tasks}>
          <Card>
            <Tasks tasks={tasks}/>
          </Card>
        </div>
        <div className={styles.calendar}>
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
        </div>
      </div>
    </>
  )
}
