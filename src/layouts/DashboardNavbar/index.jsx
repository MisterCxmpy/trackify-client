import React from 'react'
import styles from './index.module.css'
import { AiOutlineUser } from 'react-icons/ai';
import { ThemeToggle } from '../../components';

export default function DashboardNavbar() {
  return (
    <div className={styles['navbar']}>
      <div className={`${styles['nav-btn']} ${styles['username']}`}>
        {<AiOutlineUser />}
        <span className={styles['btn']}>Username</span>
        <ThemeToggle />
      </div>
    </div>
  )
}
