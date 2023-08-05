import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-scroll'
import styles from "./index.module.css"
import { Form, ThemeToggle } from '../../components'
import { useForm } from '../../contexts/FormContext'

export default function Navbar() {


  const { setFormType, setFormActive } = useForm()

  return (
    <>
      <div className={styles['navbar']}>
        <Link to={"hero"} spy={true} smooth={true} offset={-200} duration={500}><h1 className={styles['title']}>Trackify</h1></Link>
        <div className={styles['navlinks']}>
          <NewLink classes={["nav-link"]} to={"features"} content={"Features"} />
          <NewLink classes={["nav-link"]} to={"showcase"} content={"Showcase"} />
          <NewLink classes={["nav-link"]} to={"about"} content={"About"} />
          <NewLink classes={["nav-link"]} to={"contact"} content={"Contact"} />
        </div>
        <div className={styles['other']}>
          <ThemeToggle />
          <button className={`${styles['sign-in-btn']} ${styles['btn']}`} onClick={() => {
            setFormActive(true)
            setFormType("signin")
          }}>sign in</button>
        </div>
      </div>
      <Form />
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