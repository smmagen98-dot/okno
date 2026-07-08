// src/features/product-specs/ProductSpecs.tsx
import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './ProductSpecs.css';

type WoodType = 'oak' | 'larch' | 'pine';

interface SpecDetails {
  description: string;
  profile: string;
  hardware: string;
  glass: string;
  materials: string;
  finish: string;
  sealant: string;
  additionalInfo: string;
}

interface WoodProduct {
  title: string;
  lifetime: string;
  specs: SpecDetails;
  images: string[]; // Массив картинок для слайдера справа
}

const woodSpecs: Record<WoodType, WoodProduct> = {
  oak: {
    title: 'Дерево-алюминиевое окно (Дуб)',
    lifetime: 'до 80 лет',
    specs: {
      description: 'Идеальный вариант остекления для тех, кто ценит достоинства настоящей древесины и желает сэкономить средства на уходе за окнами — это современный оконный профиль из дерево-алюминия.',
      profile: 'Дерево-алюминиевый с системой Holz Plus',
      hardware: 'Maco (Австрия), Roto (Германия)',
      glass: 'от 44 мм с набором необходимых характеристик',
      materials: 'Премиальный Дуб (высший сорт)',
      finish: 'Zobel (Германия)',
      sealant: '4-х контурная система Deventer (Германия)',
      additionalInfo: 'Алюминиевая система Holz Plus, защищающая от воздействия внешней среды и увеличивающая срок службы до 80 лет'
    },
    images: [
      '/images/wwa-Optima-436x500.jpg', // Ракурс 1: Профиль окна
      '/images/images (1).jfif', // Ракурс 2: Стеклопакет в разрезе
      '/images/images.jfif'  // Ракурс 3: Общий вид
    ]
  },
  larch: {
    title: 'Дерево-алюминиевое окно (Лиственница)',
    lifetime: 'до 50 лет',
    specs: {
      description: 'Окна из лиственницы обладают природной устойчивостью к влаге и высокой прочностью. Оптимальный выбор для сурового климата.',
      profile: 'Дерево-алюминиевый с системой Holz Plus',
      hardware: 'Maco (Австрия), Roto (Германия)',
      glass: 'от 44 мм с набором необходимых характеристик',
      materials: 'Сибирская Лиственница',
      finish: 'Zobel (Германия)',
      sealant: '4-х контурная система Deventer (Германия)',
      additionalInfo: 'Высокая плотность материала обеспечивает защиту от деформации при перепадах температур.'
    },
    images: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=700&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80'
    ]
  },
  pine: {
    title: 'Дерево-алюминиевое окно (Сосна)',
    lifetime: 'до 40 лет',
    specs: {
      description: 'Легкий, дышащий и экологичный профиль из ангарской сосны. Отличное соотношение цены, теплоизоляции и эстетики дерева.',
      profile: 'Дерево-алюминиевый с системой Holz Plus',
      hardware: 'Maco (Австрия), Roto (Германия)',
      glass: 'от 44 мм с энергосбережением',
      materials: 'Ангарская Сосна',
      finish: 'Zobel (Германия)',
      sealant: '4-х контурная система Deventer (Германия)',
      additionalInfo: 'Оптимальный баланс веса и воздухообмена для загородных домов.'
    },
    images: [
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=700&q=80'
    ]
  }
};

export const ProductSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<WoodType>('oak');
  const [imgIndex, setImgIndex] = useState<number>(0);
  
  const currentData = woodSpecs[activeTab];
  const activeImages = currentData.images;

  // При переключении основной вкладки сбрасываем индекс картинки на 0
  const handleTabChange = (type: WoodType) => {
    setActiveTab(type);
    setImgIndex(0);
  };

  const nextImage = () => {
    setImgIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setImgIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length);
  };

  const { elementRef, revealClass } = useScrollReveal(0.1);

  return (
    <section 
      id="products" 
      ref={elementRef as React.RefObject<HTMLElement>} 
      className={`specs-section ${revealClass}`}
    >
      <div className="container">
        {/* Селектор вкладок (Дуб, Лиственница, Сосна) */}
        <div className="specs-tabs-nav">
          {(Object.keys(woodSpecs) as WoodType[]).map((type) => (
            <button
              key={type}
              className={`spec-tab-selector ${activeTab === type ? 'active' : ''}`}
              onClick={() => handleTabChange(type)}
            >
              {type === 'oak' ? 'Дуб' : type === 'larch' ? 'Лиственница' : 'Сосна'}
            </button>
          ))}
        </div>

        {/* Главный контентный блок */}
        <div className="specs-main-layout">
          
          {/* Левая сторона: Описание и таблица ТТХ со скриншота */}
          <div className="specs-content-left">
            <h2 className="product-title-red">{currentData.title}</h2>
            <p className="product-main-desc">{currentData.specs.description}</p>

            {/* Таблица параметров */}
            <div className="product-table-block">
              <div className="table-row-spec">
                <span className="row-label">Профиль</span>
                <span className="row-value">{currentData.specs.profile}</span>
              </div>
              <div className="table-row-spec">
                <span className="row-label">Фурнитура</span>
                <span className="row-value">{currentData.specs.hardware}</span>
              </div>
              <div className="table-row-spec">
                <span className="row-label">Стеклопакет</span>
                <span className="row-value">{currentData.specs.glass}</span>
              </div>
              <div className="table-row-spec">
                <span className="row-label">Варианты материала</span>
                <span className="row-value">{currentData.specs.materials}</span>
              </div>
              <div className="table-row-spec">
                <span className="row-label">Отделка</span>
                <span className="row-value">{currentData.specs.finish}</span>
              </div>
              <div className="table-row-spec">
                <span className="row-label">Уплотнитель</span>
                <span className="row-value">{currentData.specs.sealant}</span>
              </div>
            </div>

            <p className="product-sub-note">{currentData.specs.additionalInfo}</p>

            <button className="btn-product-more">
              ПОДРОБНЕЕ <span className="btn-arrow-right">→</span>
            </button>
          </div>

          {/* Правая сторона: Слайдер картинок с боковыми стрелками */}
          <div className="specs-media-right">
            <div className="product-slider-viewport">
              {activeImages.length > 0 ? (
                <img 
                  src={activeImages[imgIndex]} 
                  alt={`${currentData.title} ракурс ${imgIndex + 1}`} 
                  className="product-slider-img"
                  key={`${activeTab}-${imgIndex}`} // Перезапускает анимацию появления при смене
                />
              ) : (
                <div className="product-img-placeholder">Фотография подготавливается</div>
              )}

              {/* Навигационные стрелки поверх картинки, как на скриншоте */}
              {activeImages.length > 1 && (
                <div className="product-slider-controls">
                  <button onClick={prevImage} className="slider-ctrl-btn prev" aria-label="Назад">‹</button>
                  <button onClick={nextImage} className="slider-ctrl-btn next" aria-label="Вперед">›</button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

