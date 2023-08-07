import React, { useState } from 'react';
import styles from './index.module.css';
import { Link, Outlet } from 'react-router-dom';
import { GrOverview, GrProjects } from 'react-icons/gr';
import { AiOutlineTeam, AiOutlineUser } from 'react-icons/ai';
import { ThemeToggle } from '../../components';

export default function SideNavbar() {
  const [navButtons, setNavButtons] = useState([
    { icon: <GrOverview />, content: 'Overview', isActive: true, to: "/dashboard" },
    { icon: <GrProjects />, content: 'Tickets', isActive: false, to: "/dashboard/tickets" },
    { icon: <AiOutlineTeam />, content: 'Team', isActive: false, to: "/dashboard/teams" },
  ]);

  const handleNavButtonClick = (index) => {
    const updatedButtons = navButtons.map((btn, i) => ({
      ...btn,
      isActive: i === index,
    }));
    setNavButtons(updatedButtons);
  };

  return (
    <>
      <div className={styles['side-navbar']}>
        <h1 className={styles['title']}>Trackify</h1>
        <div className={styles['navbar-buttons']}>
          {navButtons.map((btn, index) => (
            <NavBtn
              key={index}
              icon={btn.icon}
              content={btn.content}
              isActive={btn.isActive}
              onClick={() => handleNavButtonClick(index)}
              to={btn.to}
            />
          ))}
          <div className={`${styles['nav-btn']} ${styles['username']}`}>
            {<AiOutlineUser />}
            <span className={styles['btn']}>Username</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

function NavBtn({ icon, content, isActive, onClick, to }) {
  return (
    <div className={`${styles['nav-btn']} ${isActive ? styles['active'] : ''}`} onClick={onClick}>
      <div className={styles['current']}></div>
      {icon}
      <Link className={styles['btn']} to={to}>
        <span className={styles['btn']}>{content}</span>
      </Link>
    </div>
  );
}
