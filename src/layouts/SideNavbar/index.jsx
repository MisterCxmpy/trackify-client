import React, { useState } from 'react';
import styles from './index.module.css';
import { Link, Outlet } from 'react-router-dom';
import { GrAdd, GrOverview, GrProjects } from 'react-icons/gr';
import { AiOutlineTeam } from 'react-icons/ai';
import { Overlay, TicketsCreate } from '../../components';

export default function SideNavbar() {

  const [showOverlay, setShowOverlay] = useState(false);

  const [navButtons, setNavButtons] = useState([
    { icon: <GrOverview />, content: 'Overview', isActive: true, to: "/dashboard" },
    { icon: <GrProjects />, content: 'Tickets', isActive: false, to: "/dashboard/tickets" },
    { icon: <AiOutlineTeam />, content: 'Team', isActive: false, to: null, hasDropdown: true, dropdownContent: ["team1", "team2"] },
    { icon: <GrAdd />, content: 'Create Team', isActive: false, to: null, onClick: () => setShowOverlay(true)},
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
        <div className={styles['navbar-buttons']}>
          {navButtons.map((btn, index) => (
            <NavBtn
              key={index}
              icon={btn.icon}
              content={btn.content}
              isActive={btn.isActive}
              onClick={() => {
                if (!btn.onClick) {
                  handleNavButtonClick(index);
                }
                if (btn.onClick) {
                  btn.onClick();
                }
              }}
              to={btn.to}
              hasDropdown={btn.hasDropdown}
              dropdownContent={btn.dropdownContent}
            />
          ))}
        </div>
      </div>
      <Outlet />
      {showOverlay && <Overlay onClose={() => setShowOverlay(false)} content={TicketsCreate} />}
    </>
  );
}

function NavBtn({ icon, content, isActive, onClick, to, hasDropdown, dropdownContent }) {
  return (
    <>
      <div className={`${styles['nav-btn']} ${isActive ? styles['active'] : ''}`} onClick={onClick}>
        <div className={styles['current']}></div>
        {icon}
        <Link className={styles['btn']} to={to}>
          <span className={styles['btn']}>{content}</span>
        </Link>
      </div>
      {hasDropdown && isActive ? <Dropdown teams={dropdownContent} /> : ""}
    </>
  );
}

function Dropdown({ teams }) {
  return ( 
    <div className={styles['dropdown']}>
      {teams.map((t) => <span className={styles['btn']}>{t}</span>)}
    </div>
  )
}