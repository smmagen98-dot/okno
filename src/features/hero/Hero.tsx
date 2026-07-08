// src/features/hero/Hero.tsx
import React from 'react';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      {/* Затемняющий слой для глубокого контраста */}
      <div className="hero-overlay"></div>
      
      <div className="container hero-container">
        {/* Карточка-контейнер с эффектом дорогого стекла поверх фото */}
        <div className="hero-content-card">
          <span className="hero-label">Собственное производство с 2011 года</span>
          
          <h1 className="hero-title">
            Дерево-алюминиевые окна <br />
            <span className="accent-text">По цене деревянных</span>
          </h1>
          
          <p className="hero-desc">
            Немецкие инженерные технологии остекления частных резиденций. 
            Совершенство натурального массива дуба внутри и бескомпромиссная защита алюминия снаружи.
          </p>
          
          <div className="hero-actions">
            <a href="#calculator" className="btn-hero">
              Рассчитать стоимость
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

