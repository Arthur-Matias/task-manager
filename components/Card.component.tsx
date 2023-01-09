import styles from '../styles/Card.module.scss'
import { ScriptProps } from 'next/script'

export default function Card({children}: ScriptProps) {
  return (
    <div className={styles.card}>
        {children}
    </div>
  )
}
