import React from 'react'
import styles from './index.module.css'

export default function SignUp() {
  return (
    <div className={styles['sign-up']}>
      <div className={styles['sign-up-form']}>
          <form>
            <div className={styles['input-section']}>
              <h1 className={styles['title']}>sign up</h1>
            </div>
            <div className={styles['input-section']}>
              <input type="text" required/>
              <span>First name</span>
            </div>
            <div className={styles['input-section']}>
              <input type="text" required />
              <span>Last name</span>
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
              <input type="password" required />
              <span>Confirm password</span>
            </div>
            <div className={styles['input-section']}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}
