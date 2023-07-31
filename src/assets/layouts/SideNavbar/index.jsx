import React, { useState } from 'react';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom';
import { GrOverview, GrProjects } from 'react-icons/gr';
import { AiOutlineTeam } from 'react-icons/ai';

export default function SideNavbar() {
  const [navButtons, setNavButtons] = useState([
    { icon: <GrOverview />, content: 'Overview', isActive: true },
    { icon: <GrProjects />, content: 'Projects', isActive: false },
    { icon: <AiOutlineTeam />, content: 'Team', isActive: false },
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
            />
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
}

function NavBtn({ icon, content, isActive, onClick }) {
  return (
    <div className={`${styles['nav-btn']} ${isActive ? styles['active'] : ''}`} onClick={onClick}>
      <div className={styles['current']}></div>
      {icon}
      <span className={styles['btn']}>{content}</span>
    </div>
  );
}
