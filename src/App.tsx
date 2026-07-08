// src/App.tsx
import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Hero } from './features/hero/Hero';
import { ProductSpecs } from './features/product-specs/ProductSpecs';
import { Benefits } from './features/benefits/Benefits'; 
import { Gallery } from './features/gallery/Gallery';
import { OrderCalculator } from './features/order-calculator/OrderCalculator'; 
import { AboutUs } from './features/about-us/AboutUs';
import { Footer } from './components/layout/Footer/Footer'; 

const App: React.FC = () => {
  return (
    <div className="app">
       <Header />
      {/* Сюда позже встанет Header */}
      <main>
        <Hero />
        {/* Здесь будут остальные секции */}
          <ProductSpecs />
          <Benefits /> 
           <Gallery />
           <OrderCalculator />
           <AboutUs />
      </main>
    <Footer />
    </div>
  );
};

export default App;

