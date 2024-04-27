import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
// fetch('http://localhost:5000/item2/')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));
// fetch('http://localhost:5000/item2/')
//   .then(response => response.json())
//   .then(data => console.log(data.b))
//   .catch(error => console.log(error));
  
function App() {
  
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
