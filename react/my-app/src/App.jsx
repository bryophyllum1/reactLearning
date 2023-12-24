import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Animals from './Animals'

function App() {
  const animals = ["Cow", "Dog","Cat"]

  return (
    <>
      <div>
        Hello, World!
        <Animals animals = {animals}/>
      </div>
    </>
  )
}

export default App
