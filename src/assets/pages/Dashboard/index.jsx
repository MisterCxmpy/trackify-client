import React from 'react'
import styles from './index.module.css'
import { VscDebugConsole, VscDebugAltSmall } from "react-icons/vsc"
import { RiTeamLine } from "react-icons/ri"
import { DashboardItem } from '../../components'

export default function Dashboard() {
  return (
    <div className={styles['dashboard']}>
      <h1 className={styles['title']}>Overview</h1>
      <div className={styles['content']}>
        <div className={styles['overview-content']}>
        <DashboardItem
        icon={<VscDebugConsole />}
        title="No. Active Bugs"
        subHeading="There are currently 5 active bugs!"
        count="Bug Count: 5"
        itemStyle={styles['acitve-bugs']}
        />
        <DashboardItem
          icon={<RiTeamLine />}
          title="No. Team Members"
          subHeading="There are currently 25 team members!"
          count="Team Members: 25"
          itemStyle={styles['team-members']}
        />
        <DashboardItem
          icon={<VscDebugAltSmall />}
          title="No. Remaining Bugs"
          subHeading="There are currently 49 remaining bugs!"
          count="Remaining Bugs: 49"
          itemStyle={styles['remaining-bugs']}
        />
          <div className={`${styles['item']} ${styles['activity']}`}></div>
          <div className={`${styles['item']} ${styles['progress']}`}></div>
          <div className={styles['recently-completed']}>
            <h3>Recent Activity</h3>
            <div className={`${styles['completed-items']}`}></div>
          </div>
          <div className={`${styles['item']} ${styles['leaderboard']}`}></div>
        </div>
      </div>
    </div>
  )
}
