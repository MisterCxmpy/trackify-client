import React, { useEffect, useState } from 'react';
import styles from './index.module.css';

export default function Landing() {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ left: e.pageX, top: e.pageY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleButtonHover = (isHovered) => {
    setIsButtonHovered(isHovered);
  };

  return (
    <div className={styles['landing']}>
      <Hero handleButtonHover={handleButtonHover}/>
      <div
        className={styles['cursor']}
        style={{ left: cursorPosition.left + 'px', top: cursorPosition.top + 'px', display: isButtonHovered ? 'block' : 'none' }}
      ></div>
    </div>
  );
}

function Hero({ handleButtonHover }) {
  return (
    <div className={styles['hero-heading']}>
      <h1 className={styles['main-heading']}>Easy way to manage your applications</h1>
      <h3 className={styles['sub-heading']}>
        Effortless Bug Tracking & Team Integration: Boost productivity and collaboration with our streamlined bug
        tracker. Achieve project success together.
      </h3>
      <div className={styles['buttons']}>
        <HoverButton handleButtonHover={handleButtonHover} content={"sign up"} />
        <HoverButton handleButtonHover={handleButtonHover} content={"learn more"} />
      </div>
    </div>
  );
}

function HoverButton({handleButtonHover, content}) {
  return (
    <button
      className={styles['button']}
      onMouseEnter={() => handleButtonHover(true)}
      onMouseLeave={() => handleButtonHover(false)}
    >{content}</button>
  )
}