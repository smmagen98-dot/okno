// src/features/about-us/AboutUs.tsx
import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './AboutUs.css';

export const AboutUs: React.FC = () => {
  // Подключаем ту же анимацию появления, что и в характеристиках
  const { elementRef, revealClass } = useScrollReveal(0.1);

  return (
    <section 
      id="about" 
      ref={elementRef as React.RefObject<HTMLElement>} 
      className={`about-section ${revealClass}`}
    >
      <div className="container">
        <div className="about-grid">
          
          {/* Левая колонка: Профессиональное позиционирование и ТТХ компании */}
          <div className="about-content">
            <span className="about-subtitle">О производстве</span>
            <h2 className="about-title">Создаем окна, которые передаются по наследству</h2>
            
            <p className="about-text">
              Мы специализируемся на проектировании и производстве дерево-алюминиевых оконных систем премиум-класса. За годы работы мы объединили классические традиции ручной деревообработки с передовыми немецкими технологиями защиты профиля.
            </p>
            
            <p className="about-text">
              Каждое изделие проходит три этапа строгого контроля качества: от ультразвукового подбора плотности древесины до финальной калибровки прижимных механизмов фурнитуры. Мы принципиально не используем массовые шаблоны — каждое решение проектируется под индивидуальную архитектуру дома.
            </p>

            {/* Сетка с ключевыми показателями (инфографика) */}
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <span className="stat-num">15+</span>
                <span className="stat-desc">лет на рынке светопрозрачных конструкций</span>
              </div>
              <div className="about-stat-item">
                <span className="stat-num">80 лет</span>
                <span className="stat-desc">расчетный срок службы дерево-алюминиевого профиля</span>
              </div>
              <div className="about-stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-desc">соответствие немецким стандартам качества</span>
              </div>
            </div>
          </div>

          {/* Правая колонка: Элегантный визуал производства или готового объекта */}
          <div className="about-media">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Высокотехнологичное производство окон" 
                className="about-img"
              />
              {/* Серьезная минималистичная плашка поверх фото */}
              <div className="about-badge-experience">
                <span className="badge-year">с 2011</span>
                <span className="badge-label">года держим планку</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

