import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Моя Шпаргалка Компонентов</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/button" style={{ fontSize: '20px', textDecoration: 'none', color: '#007bff' }}>
              🔘 Универсальная Кнопка (Button)
            </Link>
          </li>
          {/* Сюда будешь добавлять новые компоненты: Input, Card, Modal и т.д. */}
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;