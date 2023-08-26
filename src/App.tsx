import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Notes from './components/Notes'

function App() {
  useEffect(() => {
    console.log('Rendering <App />')
  })

  return (
    <div className="App">
      <Notes />
    </div>
  )
}

export default App
