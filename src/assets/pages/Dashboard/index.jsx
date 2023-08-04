import React from 'react'
import styles from './index.module.css'
import { VscDebugConsole, VscDebugAltSmall } from "react-icons/vsc"
import { RiTeamLine } from "react-icons/ri"
import { BsActivity } from "react-icons/bs"
import { GiProgression } from "react-icons/gi"
import { OverviewActivity, OverviewItem, OverviewProgress } from '../../components'

export default function Dashboard() {
  return (
    <div className={styles['dashboard']}>
      <h1 className={styles['title']}>Overview</h1>
      <div className={styles['content']}>
        <div className={styles['overview-content']}>
          <OverviewItem
            icon={<VscDebugConsole />}
            title="No. Active Tickets"
            subHeading="There are currently 5 active Tickets!"
            count="Tickets Count: 5"
            itemStyle={styles['acitve-bugs']}
          />
          <OverviewItem
            icon={<RiTeamLine />}
            title="No. Team Members"
            subHeading="There are currently 25 team members!"
            count="Team Members: 25"
            itemStyle={styles['team-members']}
          />
          <OverviewItem
            icon={<VscDebugAltSmall />}
            title="No. Remaining Tickets"
            subHeading="There are currently 49 remaining Tickets!"
            count="Remaining Tickets: 49"
            itemStyle={styles['remaining-bugs']}
          />
          <OverviewActivity icon={<BsActivity />} title="Activity" itemStyle={styles['activity']} />
          <OverviewProgress icon={<GiProgression />} title="Progress" itemStyle={styles['progress']} />
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
