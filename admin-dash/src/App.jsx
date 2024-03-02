import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
        <div className='app-sidebar'>
          <Sidebar />
        </div>
        <div className='app-header'>
          <Header />
        </div>
        <div className='app-dash'>
          <Dashboard />
        </div>
      </div>
      
    </>
  )
}

export default App
