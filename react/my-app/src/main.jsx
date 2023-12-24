import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Greetings from './Greetings.jsx'
import TodoList from './Keys.jsx'
import Button from './DataTransfer.jsx'
import AppSecond from './PropDestructuring.jsx'
import BackGroundColor from './State.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Greetings />
    <TodoList />
    <Button />
    <AppSecond />
    <BackGroundColor />
  </React.StrictMode>,
)
