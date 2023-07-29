import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './assets/layouts'
import { Landing } from './assets/pages'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Container />}/>
        </Route>
      </Routes>
    </>
  )
}

function Container() {
  return (
    <div className="container">
      <Routes>
        <Route index element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App
