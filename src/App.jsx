import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer, Navbar, SideNavbar } from './layouts';
import { Dashboard, Landing } from './pages';
import { useEffect } from 'react';

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
          <Route index element={<LayoutWrapper className="dashboard-container"><Dashboard /></LayoutWrapper>} />
          <Route path='projects' element={<LayoutWrapper className="dashboard-container"><h1>Projects</h1></LayoutWrapper>} />
          <Route path='teams' element={<LayoutWrapper className="dashboard-container"><h1>Teams</h1></LayoutWrapper>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

function LayoutWrapper({ children, className }) {
  return <div className={className}>{children}</div>;
}

function NavbarLayout() {
  return <Navbar />;
}

function SidenavbarLayout() {
  return <SideNavbar />;
}

export default App;
