import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, SideNavbar } from './assets/layouts';
import { Dashboard, Landing } from './assets/pages';
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
          <Route index element={<LandingContainer />} />
        </Route>

        <Route path="/dashboard" element={<SidenavbarLayout />}>
          <Route index element={<DashboardContainer />} />
        </Route>
      </Routes>
    </>
  );
}

function NavbarLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

function SidenavbarLayout({ children }) {
  return (
    <>
      <SideNavbar />
      {children}
    </>
  );
}

function LandingContainer() {
  return (
    <div className="container">
      <Landing />
    </div>
  );
}

function DashboardContainer() {
  return (
    <div className="dashboard-container">
      <Dashboard />
    </div>
  );
}

export default App;
