// src/components/layout/Header/Header.tsx
import React, { useState } from 'react';
import './Header.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`site-header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        
        {/* Строгий текстовый логотип */}
        <div className="header-logo">
          КРАСНЫЕ<span>ОКНА</span>
        </div>
        
        {/* Навигация по якорным ссылкам */}
        <nav className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#products" onClick={closeMenu}>Продукция</a>
          <a href="#features" onClick={closeMenu}>Преимущества</a>
          <a href="#calculator" onClick={closeMenu}>Расчет стоимости</a>
          <a href="#gallery" onClick={closeMenu}>Галерея</a>
          <a href="#about" onClick={closeMenu}>О нас</a>
        </nav>

        {/* Контакты */}
        <div className="header-contacts">
          <a href="tel:+79255420505" className="header-phone">
            +7 (925) 542-05-05
          </a>
          <span className="header-worktime">Пн-Пт 9:00 — 19:00</span>
        </div>

        {/* Изящная кнопка Бургера (только для мобильных) */}
        <button 
          className={`burger-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

