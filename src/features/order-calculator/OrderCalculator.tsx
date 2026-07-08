// src/features/order-calculator/OrderCalculator.tsx
import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal'; // Импорт хука
import { Modal } from '../../components/ui/Modal/Modal';
import './OrderCalculator.css';

type WoodType = 'pine' | 'larch' | 'oak';
type OpeningType = 'fixed' | 'turn' | 'tilt-turn';

const WOOD_MULTIPLIERS: Record<WoodType, { name: string; coeff: number }> = {
  pine: { name: 'Ангарская сосна', coeff: 1.0 },
  larch: { name: 'Сибирская лиственница', coeff: 1.35 },
  oak: { name: 'Премиальный дуб', coeff: 1.8 },
};

const OPENING_MULTIPLIERS: Record<OpeningType, { name: string; coeff: number }> = {
  fixed: { name: 'Глухое (не открывается)', coeff: 1.0 },
  turn: { name: 'Поворотное', coeff: 1.25 },
  'tilt-turn': { name: 'Поворотно-откидное', coeff: 1.4 },
};

export const OrderCalculator: React.FC = () => {
  const [wood, setWood] = useState<WoodType>('pine');
  const [opening, setOpening] = useState<OpeningType>('fixed');
  const [width, setWidth] = useState<number>(1200);
  const [height, setHeight] = useState<number>(1400);
  const [price, setPrice] = useState<number>(0);

  // Состояния для модального окна и формы
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const basePricePerSqMeter = 24000; 
    const areaInMeters = (width / 1000) * (height / 1000);
    
    const calculatedPrice = 
      areaInMeters * 
      basePricePerSqMeter * 
      WOOD_MULTIPLIERS[wood].coeff * 
      OPENING_MULTIPLIERS[opening].coeff;

    setPrice(Math.round(calculatedPrice));
  }, [wood, opening, width, height]);

  // Валидация формы
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; phone?: string } = {};

    if (!userName.trim()) {
      errors.name = 'Пожалуйста, введите ваше имя';
    }

    // Простая проверка длины номера телефона (минимум 10 цифр)
    const digitsOnly = userPhone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      errors.phone = 'Введите корректный номер телефона';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({});
      setIsSubmitted(true);
      
      // Здесь в будущем будет fetch-запрос к бэкенду
      console.log('Данные к отправке:', {
        name: userName,
        phone: userPhone,
        configuration: {
          wood: WOOD_MULTIPLIERS[wood].name,
          type: OPENING_MULTIPLIERS[opening].name,
          dimensions: `${width}×${height} мм`,
          finalPrice: `${price} руб.`
        }
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSubmitted(false);
    setUserName('');
    setUserPhone('');
    setFormErrors({});
  };

  const { elementRef, revealClass } = useScrollReveal(0.1);

  return (
    <section 
      id="calculator" 
      ref={elementRef as React.RefObject<HTMLElement>} 
      className={`calc-section ${revealClass}`} // Добавили класс анимации
    >
      <div className="container">
        <div className="calc-layout">
          
          <div className="calc-controls">
            <span className="calc-subtitle">Конфигуратор стоимости</span>
            <h2 className="calc-title">Индивидуальный расчет</h2>

            <div className="control-group">
              <label className="group-label">Порода древесины</label>
              <div className="selector-grid">
                {(Object.keys(WOOD_MULTIPLIERS) as WoodType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`selector-btn ${wood === type ? 'active' : ''}`}
                    onClick={() => setWood(type)}
                  >
                    {WOOD_MULTIPLIERS[type].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <label className="group-label">Режим конфигурации</label>
              <div className="selector-grid">
                {(Object.keys(OPENING_MULTIPLIERS) as OpeningType[]).map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`selector-btn ${opening === type ? 'active' : ''}`}
                    onClick={() => setOpening(type)}
                  >
                    {OPENING_MULTIPLIERS[type].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="control-group">
              <div className="range-label-wrapper">
                <label className="group-label">Ширина окна</label>
                <span className="range-value">{width} мм</span>
              </div>
              <input
                type="range"
                min="600"
                max="2400"
                step="50"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div className="control-group">
              <div className="range-label-wrapper">
                <label className="group-label">Высота окна</label>
                <span className="range-value">{height} мм</span>
              </div>
              <input
                type="range"
                min="600"
                max="2200"
                step="50"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="custom-range"
              />
            </div>
          </div>

          <div className="calc-result-panel">
            <div className="result-sticky-content">
              <div className="result-header">Ваша конфигурация</div>
              
              <div className="result-summary-item">
                <span>Материал:</span>
                <strong>{WOOD_MULTIPLIERS[wood].name}</strong>
              </div>
              <div className="result-summary-item">
                <span>Тип конструкции:</span>
                <strong>{OPENING_MULTIPLIERS[opening].name}</strong>
              </div>
              <div className="result-summary-item">
                <span>Размеры:</span>
                <strong>{width} × {height} мм</strong>
              </div>

              <div className="result-divider"></div>

              <div className="price-display-wrapper">
                <span className="price-label">Ориентировочная стоимость:</span>
                <span className="price-number">{price.toLocaleString('ru-RU')} руб.</span>
              </div>

              <button className="btn-order" onClick={() => setIsModalOpen(true)}>
                Отправить конфигурацию на фабрику
              </button>
              <p className="calc-disclaimer">
                * Включает двухкамерный энергосберегающий стеклопакет и немецкую фурнитуру. Точная стоимость формируется после замера.
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* Вызов кастомного модального окна */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Оформление заявки">
        {!isSubmitted ? (
          <form onSubmit={handleSubmitForm} className="modal-form" noValidate>
            <p className="form-lead-text">
              Менеджер инженерного бюро свяжется с вами для подтверждения параметров спецификации.
            </p>
            
            <div className="form-input-wrapper">
              <label className="form-input-label">Ваше имя</label>
              <input
                type="text"
                className={`form-field ${formErrors.name ? 'error' : ''}`}
                placeholder="Константин"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {formErrors.name && <span className="form-error-message">{formErrors.name}</span>}
            </div>

            <div className="form-input-wrapper">
              <label className="form-input-label">Телефон для связи</label>
              <input
                type="tel"
                className={`form-field ${formErrors.phone ? 'error' : ''}`}
                placeholder="+7 (999) 000-00-00"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
              />
              {formErrors.phone && <span className="form-error-message">{formErrors.phone}</span>}
            </div>

            <button type="submit" className="form-submit-btn">
              Зафиксировать стоимость
            </button>
          </form>
        ) : (
          <div className="form-success-state">
            <div className="success-icon">✓</div>
            <h4>Конфигурация принята</h4>
            <p>Расчет передан инженерам фабрики. Мы свяжемся с вами в течение 15 минут.</p>
            <button type="button" className="form-submit-btn" onClick={handleCloseModal}>
              Закрыть окно
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};



