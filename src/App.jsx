import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './assets/layouts'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          
        </Route>
      </Routes>
    </>
  )
}

export default App
