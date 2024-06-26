import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import { TaskContextProvider } from './Context/TaskContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TaskContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </TaskContextProvider>
)
