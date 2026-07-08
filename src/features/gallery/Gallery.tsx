
// src/features/gallery/Gallery.tsx
import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Импорт хука
import './Gallery.css';

interface ProjectItem {
  id: number;
  title: string;
  location: string;
  wood: string;
  imagePlaceholder: string;
  image: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: 'Остекление загородной резиденции',
    location: 'Новая Рига, Подмосковье',
    wood: 'Премиальный дуб, патина',
    imagePlaceholder: 'Минималистичный фасад с панорамным остеклением из дуба',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    title: 'Пентхаус в современном стиле',
    location: 'ЖК «Воробьевы Горы», Москва',
    wood: 'Сибирская лиственница, браширование',
    imagePlaceholder: 'Панорамные окна в пол с видом на город',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    title: 'Частная усадьба из бруса',
    location: 'Истринское водохранилище',
    wood: 'Ангарская сосна, лессирующий лак',
    imagePlaceholder: 'Интеграция дерево-алюминиевых окон в бревенчатый сруб',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
  }
];

export const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  // Подключаем анимацию
  const { elementRef, revealClass } = useScrollReveal(0.1);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section 
      id="gallery" 
      ref={elementRef as React.RefObject<HTMLElement>} 
      className={`gallery-section ${revealClass}`}
    >
      <div className="container">
        <header className="gallery-header">
          <span className="gallery-subtitle">Реализованные объекты</span>
          <h2 className="gallery-title">Архитектура в деталях</h2>
        </header>

        <div className="gallery-display">
          {/* Интерактивный слайд (визуал) */}
          <div className="gallery-viewport">
            {currentProject.image ? (
              <img 
                src={currentProject.image} 
                alt={currentProject.title} 
                className="gallery-image"
                key={currentProject.id}
              />
            ) : (
              <div className="gallery-image-stub">
                <span className="stub-text">[{currentProject.imagePlaceholder}]</span>
              </div>
            )}
            
            {/* Навигационные стрелки */}
            <div className="gallery-nav-arrows">
              <button onClick={handlePrev} className="arrow-btn" aria-label="Назад">←</button>
              <button onClick={handleNext} className="arrow-btn" aria-label="Вперед">→</button>
            </div>
          </div>

          {/* Информационная панель текущего проекта */}
          <div className="gallery-info-panel">
            <div className="info-meta">
              <span className="info-counter">0{currentProject.id} / 0{projectsData.length}</span>
              <h3 className="info-title" key={`title-${currentProject.id}`}>{currentProject.title}</h3>
            </div>

            <div className="info-details">
              <div className="detail-item">
                <span className="detail-label">Локация</span>
                <span className="detail-value" key={`loc-${currentProject.id}`}>{currentProject.location}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Материал профиля</span>
                <span className="detail-value" key={`wood-${currentProject.id}`}>{currentProject.wood}</span>
              </div>
            </div>

            {/* Прогресс-бар внизу */}
            <div className="gallery-progress-bar">
              {projectsData.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`progress-line ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
