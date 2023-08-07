import { Route, Routes } from 'react-router-dom';
import { Navbar, SideNavbar } from './layouts';
import { Landing, OverviewPage } from './pages';
import { useEffect } from 'react';
import './App.css';
import styles from './App.module.css'

function App() {
  let theme = localStorage.getItem("theme");

  if (!theme) {
    theme = "light";
    localStorage.setItem("theme", theme);
  }

  useEffect(() => {
    document.querySelector('body').setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <Routes>
        <Route path="/" element={<NavbarLayout />}>
          <Route index element={<LayoutWrapper className="container"><Landing /></LayoutWrapper>} />
        </Route>

        <Route path="/dashboard" element={<SidenavbarLayout />}>
          <Route index element={<LayoutWrapper className="dashboard-container" title={"Overview"}><OverviewPage /></LayoutWrapper>} />
          <Route path='tickets' element={<LayoutWrapper className="dashboard-container" title={"Tickets"}><h1>Tickets</h1></LayoutWrapper>} />
          <Route path='teams' element={<LayoutWrapper className="dashboard-container" title={"Teams"}><h1>Teams</h1></LayoutWrapper>} />
        </Route>
      </Routes>
    </>
  );
}

function LayoutWrapper({ children, className, title }) {
  return (
    className == "dashboard-container" ?
    <div className={className}>
      <div className={styles['dashboard']}>
        <h1 className={styles['title']}>{title}</h1>
        <div className={styles['content']}>
          {children}
        </div>
      </div>
    </div>
    : 
    <div className={"container"}>
      {children}
    </div>
  )
  
}

function NavbarLayout() {
  return <Navbar />;
}

function SidenavbarLayout() {
  return <SideNavbar />;
}

export default App;
