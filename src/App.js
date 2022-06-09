import './App.css';

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage/>} />
        <Route path='/posts' element={<PostsPage/>} />
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
    </Router>
  );
}

export default App;
