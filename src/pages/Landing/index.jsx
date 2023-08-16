import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import { MdOutlineAnalytics } from 'react-icons/md';
import { AiOutlineIssuesClose, AiFillBug, AiOutlineTeam } from 'react-icons/ai';
import { Link } from 'react-scroll';
import { useForm } from '../../contexts/FormContext';
import { showcase } from '../../assets';
import { Footer } from '../../layouts';

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
    <>
      <div className={styles['landing']}>
        <Hero handleButtonHover={handleButtonHover}/>
        <Features />
        <Showcase />
        <About />
        <Contact />
        <div
          className={styles['cursor']}
          style={{ left: cursorPosition.left + 'px', top: cursorPosition.top + 'px', scale: isButtonHovered ? '1' : '0'}}
        ></div>
      </div>
      <Footer />
    </>
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
        <HoverLinkButton handleButtonHover={handleButtonHover} content={"learn more"} />
      </div>
    </div>
  );
}

function HoverButton({handleButtonHover, content}) {
  
  const { setFormType, setFormActive } = useForm()

  return (
    <button className={styles['button']}
      onClick={() => {
        setFormActive(true)
        setFormType("signup")
      }}
      onMouseEnter={() => handleButtonHover(true)}
      onMouseLeave={() => handleButtonHover(false)}>{content}
    </button>
  )
}

function HoverLinkButton({handleButtonHover, content}) {
  return (
    <Link to={"about"} spy={true} smooth={true} offset={-150} duration={800}>
      <button className={styles['button']}
      onMouseEnter={() => handleButtonHover(true)}
      onMouseLeave={() => handleButtonHover(false)}>{content}</button>
    </Link>
  )
}

//#endregion

//#region Features

function Features() {
  const srcText = `
1  function Features() {
2    return (
3      <div className={styles['features']} id='features'>
4        <div className={styles['coding-block']}>
5          <div className={styles['header']}>
6            <span className={styles['header-title']}>src/components/Features</span>
7          </div>
8          <div className={styles['wrapper']}>
9            <p className={styles['typed-paragraph']}>
10             <span className={styles['target']}>{result}</span>
11             <span className={styles['typed-cursor']}>|</span>
12           </p>
13         </div>
14       </div>
15     </div>
16   )
17 }`;

  const [inView, setInView] = useState(false);
  const [result, setResult] = useState('');
  const iRef = useRef(0);

  useEffect(() => {
    if (inView) {
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
    }
  }, [inView]);

  const featuredRef = useRef();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true)
          entry.target.classList.remove(styles['hidden']);
          entry.target.classList.add(styles['show']);
        }
      });
    },
    {
      rootMargin: '0px 0px -50% 0px',
    }
  );

  useEffect(() => {
    observer.observe(featuredRef.current);
    return () => observer.disconnect();
  }, [observer]);

  return (
    <div className={`${styles['features']} ${styles['hidden']}`} id='features' ref={featuredRef}>
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
      <FeatureTooltip content={"Issue Creation"} />
      <FeatureTooltip content={"Issue Tracking"} />
      <FeatureTooltip content={"Team Collaboration"} />
      <FeatureTooltip content={"Reporting and Analytics"} />
    </div>
  )
}

function FeatureTooltip({content}) {
  return (
    <div className={styles['feature-tooltip']}>
      <h3>{content}</h3>
    </div>
  )
}

//#endregion

//#region Showcase Section

function Showcase() {
  return (
    <div className={styles['showcase']} id='showcase'>
      <div className={styles['image']}>
        <img src={showcase} alt="" />
      </div>
    </div>
  )
}

//#endregion

//#region About Section

function About() {
  return (
    <div className={styles['about']} id='about'>
      <AboutInfo title={"Issue Creation"} content={"Trackify allows users to effortlessly create detailed bug reports, capturing critical information like the bug's description, severity, and steps to reproduce, ensuring clear and comprehensive communication."} image={<AiOutlineIssuesClose />} isReverse={false}/>
      <AboutInfo title={"Issue Tracking"} content={"With Trackify's robust tracking capabilities, teams can monitor the progress of each bug, from creation to resolution, ensuring nothing slips through the cracks, promoting efficient bug management."} image={<AiFillBug />} isReverse={true}/>
      <AboutInfo title={"Team Collaboration"} content={"Trackify facilitates seamless collaboration among team members by providing tools for assigning bugs, commenting, and sharing updates, fostering effective teamwork in resolving issues promptly."} image={<AiOutlineTeam />} isReverse={false}/>
      <AboutInfo title={"Reporting and Analytics"} content={"Trackify empowers users with insightful bug reporting and analytics, offering key metrics on bug trends, resolution times, and project health, aiding data-driven decision-making for continuous improvement."} image={<MdOutlineAnalytics />} isReverse={true}/>
    </div>
  )
}

function AboutInfo({ title, content, image, isReverse }) {

  return (
    <div className={`${styles['about-info']} ${isReverse ? styles["reverse"] : null}`}>
      <h1 className={styles['about-title']}>{title}</h1>
      <div className={styles['image']}>{image}</div>
      <span className={styles['content']}>{content}</span>
    </div>
  )
}

//#endregion

//#region Contact Section

function Contact() {
  return (
    <div className={styles['contact']} id='contact'>
      <h1 className={styles['title']}>contact us</h1>
      <div className={styles['contact-form']}>
          <form>
            <div className={styles['input-section']}>
              <input type="text" required/>
              <span>Your name</span>
            </div>
            <div className={styles['input-section']}>
              <input type="text" required />
              <span>Your Email</span>
            </div>
            <div className={styles['input-section']}>
              <input type="text" required />
              <span>Subject</span>
            </div>
            <div className={styles['input-section']}>
              <textarea type="text" required />
              <span>Message</span>
            </div>
            <div className={styles['input-section']}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
    </div>
  )
}

//#endregion