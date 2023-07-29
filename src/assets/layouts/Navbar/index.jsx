import React from 'react'
import {NavLink, Outlet } from 'react-router-dom'
import styles from "./index.module.css"

export default function Navbar() {
  return (
    <>
      <div className={styles['navbar']}>
        <NavLink to={"/"}><h1 className={styles['title']}>Trackify</h1></NavLink>
        <div className={styles['navlinks']}>
          <Link classes={["nav-link"]} to={"/"} content={"Showcase"} />
          <Link classes={["nav-link"]} to={"/"} content={"About"} />
          <Link classes={["nav-link"]} to={"/"} content={"Contact"} />
        </div>
        <Link classes={["sign-in-btn", "btn"]} to={"/"} content={"sign in"} />
      </div>
      <Outlet />
    </>
  )
}

function Link({classes, to, content}) {
  const combinedClasses = classes.map(className => styles[className]).join(" ");

  return (
    <NavLink to={to}>
      <span className={combinedClasses}>{content}</span>
    </NavLink>
  )
}