import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Link } from 'react-scroll'
import styles from "./index.module.css"

export default function Navbar() {

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark")
  }

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light")
  }

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode()
    else setLightMode()
  }

  return (
    <>
      <div className={styles['navbar']}>
        <Link to={"hero"} spy={true} smooth={true} offset={-200} duration={500}><h1 className={styles['title']}>Trackify</h1></Link>
        <div className={styles['navlinks']}>
          <NewLink classes={["nav-link"]} to={"features"} content={"Features"} />
          <NewLink classes={["nav-link"]} to={"showcase"} content={"Showcase"} />
          <NewLink classes={["nav-link"]} to={"about"} content={"About"} />
          <NewLink classes={["nav-link"]} to={"/"} content={"Contact"} />
        </div>
        <div className={styles['other']}>
          <input
                type='checkbox'
                onChange={toggleTheme}
            />
          <NewLink classes={["sign-in-btn", "btn"]} to={"/"} content={"sign in"} />
        </div>
      </div>
      <Outlet />
    </>
  )
}

function NewLink({classes, to, content}) {
  const combinedClasses = classes.map(className => styles[className]).join(" ");

  return (
    <Link to={to} spy={true} smooth={true} offset={-150} duration={500}>
      <span className={combinedClasses}>{content}</span>
    </Link>
  )
}