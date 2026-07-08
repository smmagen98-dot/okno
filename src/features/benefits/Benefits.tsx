
// src/features/benefits/Benefits.tsx
import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Импортируем хук
import './Benefits.css';

const features = [
  { title: 'Экологичность', text: 'Натуральная древесина создает здоровый микроклимат в доме без использования вредных пропиток.' },
  { title: 'Теплоизоляция', text: 'Многокамерные системы исключают мостики холода, снижая затраты на отопление.' },
  { title: 'Долговечность', text: 'Срок службы системы превышает 50 лет благодаря профессиональной защите алюминием.' },
  { title: 'Шумоизоляция', text: 'Массив дерева и герметичные уплотнители гасят уличный шум, обеспечивая тишину.' }
];

export const Benefits: React.FC = () => {
  // Подключаем хук слежки за скроллом
  const { elementRef, revealClass } = useScrollReveal(0.15);

  return (
    <section 
      id="features" 
      ref={elementRef as React.RefObject<HTMLElement>} 
      className={`benefits-section ${revealClass}`} // Связываем классы анимации
    >
      <div className="container">
        <h2 className="benefits-title">Инженерный подход к комфорту</h2>
        <div className="benefits-grid">
          {features.map((item, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-number">0{index + 1}</span>
              <h3 className="benefit-card-title">{item.title}</h3>
              <p className="benefit-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
