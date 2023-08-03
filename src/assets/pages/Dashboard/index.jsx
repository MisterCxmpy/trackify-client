import React from 'react'
import styles from './index.module.css'

export default function Dashboard() {
  return (
    <div className={styles['dashboard']}>
      <h1 className={styles['title']}>Overview</h1>
      <div className={styles['content']}>
        <div className={styles['overview-content']}>
          <div className={`${styles['item']} ${styles['acitve-bugs']}`}></div>
          <div className={`${styles['item']} ${styles['team-members']}`}></div>
          <div className={`${styles['item']} ${styles['remaining-bugs']}`}></div>
          <div className={`${styles['item']} ${styles['activity']}`}></div>
          <div className={`${styles['item']} ${styles['progress']}`}></div>
          <div className={styles['recently-completed']}>
            <div className={`${styles['completed-items']}`}></div>
            <div className={`${styles['completed-items']}`}></div>
            <div className={`${styles['completed-items']}`}></div>
            <div className={`${styles['completed-items']}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}
