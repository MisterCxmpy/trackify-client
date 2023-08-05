import React from 'react'
import styles from './index.module.css'

export default function SignIn() {
  return (
    <div className={styles['sign-in']}>
      <div className={styles['sign-in-form']}>
          <form>
            <div className={styles['input-section']}>
              <h1 className={styles['title']}>sign in</h1>
            </div>
            <div className={styles['input-section']}>
              <input type="text" required />
              <span>Email</span>
            </div>
            <div className={styles['input-section']}>
              <input type="password" required />
              <span>Password</span>
            </div>
            <div className={styles['input-section']}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}
