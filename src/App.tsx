import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Главная страница со списком */}
        <Route path="/" element={<HomePage />} />
        
        {/* Страница конкретного компонента */}
        <Route path="/button" element={<ButtonPage />} />
        
        {/* Можно добавить 404 страницу */}
        <Route path="*" element={<div>404 - Страница не найдена</div>} />
      </Routes>
    </Router>
  );
}

export default App;