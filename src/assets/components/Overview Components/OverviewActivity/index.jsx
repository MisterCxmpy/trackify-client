import React from 'react'
import styles from './index.module.css'

export default function OverviewActivity({ icon, title, itemStyle }) {
  return (
    <div className={`${styles['item']} ${itemStyle}`}>
      <div className={styles['heading']}>
        {icon}
        <h1>{title}</h1>
      </div>
      <div className={styles['inner-content']}>
        <div className={`${styles['completed-items']}`}></div>
      </div>
    </div>
  )
}
