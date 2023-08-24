import React from 'react'
import styles from './index.module.css'

export default function TeamCreate({ onClose }) {
  return (
    <div className={styles['form']}>
      <div className={styles['header']}>
        <h1>Create Team</h1>
        <button onClick={onClose}>&times;</button>
      </div>
      <form className={styles['form-content']}>
        <div className={styles['input-section']}>
          <input type='text' required />
          <span>Team Name</span>
        </div>
      </form>
    </div>
  )
}
