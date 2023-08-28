import { useEffect } from 'react'
import './App.css'
import HomePage from './HomePage'

function App() {
  useEffect(() => {
    console.log('Rendering <App />')
  })

  return <div><HomePage /></div>
}

export default App
