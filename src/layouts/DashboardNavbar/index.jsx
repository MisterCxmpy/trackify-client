import React from 'react'
import styles from './index.module.css'
import { AiOutlineUser } from 'react-icons/ai';
import { ThemeToggle } from '../../components';
import { MdNotificationsNone, MdSearch, MdSettings } from 'react-icons/md';

const user = JSON.parse(localStorage.getItem("user"))

export default function DashboardNavbar() {
  return (
    <div className={styles['navbar']}>
      <h1 className={styles['title']}>Trackify</h1>
      <div className={styles['search']}>
        <MdSearch />
        <input type="text" className={styles['search-bar']} required />
        <span>Search tickets, teams and team members</span>
      </div>
      <div className={styles['options']}>
        <div className={`${styles['nav-btn']}`}>
          <span className={styles['icon']}><MdSettings /></span>
        </div>
        <div className={`${styles['nav-btn']}`}>
          <span className={styles['icon']}><MdNotificationsNone /></span>
        </div>
        <div className={`${styles['nav-btn']} ${styles['username']}`}>
          {<AiOutlineUser className={styles['icon']} />}
          <span className={styles['btn']}>{user.username}</span>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}
