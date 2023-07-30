import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

export default function Landing() {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleMouseMove = (e) => {
    setCursorPosition({ left: e.clientX, top: e.clientY });
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
      <Features />
      <Showcase />
      <About />
      <div
        className={styles['cursor']}
        style={{ left: cursorPosition.left + 'px', top: cursorPosition.top + 'px', opacity: isButtonHovered ? '1' : '0'}}
      ></div>
    </div>
  );
}

//#region Hero Section

function Hero({ handleButtonHover }) {
  return (
    <div className={styles['hero-heading']} id='hero'>
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

//#endregion

//#region Features

function Features() {
  const srcText = `
function Features() {
  return (
    <div className={styles['features']} id='features'>
      <div className={styles['coding-block']}>
        <div className={styles['header']}>
          <span className={styles['header-title']}>src/components/Features</span>
        </div>
        <div className={styles['wrapper']}>
          <p className={styles['typed-paragraph']}>
            <span className={styles['target']}>{result}</span>
            <span className={styles['typed-cursor']}>|</span>
          </p>
        </div>
      </div>
    </div>
  )
}`;
  const [result, setResult] = useState('');
  const iRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (iRef.current === srcText.length - 1) {
        clearInterval(interval);
        return;
      }
      iRef.current++;
      setResult((prevResult) => prevResult + srcText[iRef.current]);
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles['features']} id='features'>
      <div className={styles['coding-block']}>
        <div className={styles['header']}>
          <span className={styles['header-title']}>src/components/Features</span>
        </div>
        <div className={styles['wrapper']}>
          <p className={styles['typed-paragraph']}>
            <span className={styles['target']}>{result}</span>
            <span className={styles['typed-cursor']}>|</span>
          </p>
        </div>
      </div>
    </div>
  )
}

//#endregion

//#region Showcase Section

function Showcase() {
  return (
    <div className={styles['showcase']} id='showcase'>
      <div className={styles['image']}></div>
    </div>
  )
}

//#endregion

//#region About Section

function About() {
  return (
    <div className={styles['about']} id='about'>
      <AboutInfo isReverse={false}/>
      <AboutInfo isReverse={true}/>
      <AboutInfo isReverse={false}/>
    </div>
  )
}

function AboutInfo({ isReverse }) {

  return (
    <div className={`${styles['about-info']} ${isReverse ? styles["reverse"] : null}`}>
      <div className={styles['image']}></div>
      <span className={styles['content']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, culpa voluptas eaque vitae modi temporibus quod dolore facere neque repudiandae ab nisi eveniet tempora cumque voluptatum, sunt aperiam ratione! Tempore.</span>
    </div>
  )
}

//#endregion