// src/components/layout/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        
        {/* Левая колонка: Логотип и копирайт */}
        <div className="footer-brand">
          <div className="footer-logo">
            КРАСНЫЕ<span>ОКНА</span>
          </div>
          <p className="footer-copy">
            © {currentYear} ООО «Бюро инженерных решений». <br />
            Все права защищены. Разработка премиум-систем остекления.
          </p>
        </div>

        {/* Средняя колонка: Быстрые ссылки */}
        <div className="footer-nav">
          <h4 className="footer-title">Навигация</h4>
          <a href="#products">Продукция</a>
          <a href="#features">Преимущества</a>
          <a href="#calculator">Конфигуратор</a>
        </div>

        {/* Правая колонка: Контакты и адрес */}
        <div className="footer-contacts">
          <h4 className="footer-title">Контакты</h4>
          <a href="tel:+79255420505" className="footer-phone">+7 (925) 542-05-05</a>
          <p className="footer-address">
            Москва, ул. Космонавта Волкова, 20<br />
            БЦ «Волкова 20», оф. 120
          </p>
        </div>

      </div>
    </footer>
  );
};

