import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar, SideNavbar } from './assets/layouts';
import { Dashboard, Landing } from './assets/pages';

function App() {
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
    <div className="container">
      <Dashboard />
    </div>
  );
}

export default App;
