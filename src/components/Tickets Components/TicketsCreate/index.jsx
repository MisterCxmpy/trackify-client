import React from 'react'
import styles from './index.module.css'

export default function TicketsCreate({ onClose }) {
  return (
    <div className={styles['form']}>
      <div className={styles['header']}>
        <h1>Create Ticket</h1>
        <button onClick={onClose}>&times;</button>
      </div>
    </div>
  )
}
