// src/features/product-specs/data.ts
import { WoodType, SpecsData } from './types';

export const woodSpecs: Record<WoodType, SpecsData> = {
  oak: {
    title: 'Премиальный Дуб',
    specs: {
      profile: 'Дерево-алюминиевый с системой Holz Plus (Элит)',
      hardware: 'Maco (Австрия), Roto (Германия) — усиленная',
      glass: 'от 44 мм, энергосберегающий с аргоном',
      finish: 'Zobel (Германия) — премиальная текстурная лакировка',
      sealant: '4-х контурная система Deventer (Германия)',
      description: 'Максимальная прочность, благородная тяжелая текстура и долговечность до 80 лет.',
      lifetime: 'до 80 лет'
    }
  },
  larch: {
    title: 'Сибирская Лиственница',
    specs: {
      profile: 'Дерево-алюминиевый с системой Holz Plus (Бизнес)',
      hardware: 'Maco (Австрия), Roto (Германия)',
      glass: 'от 44 мм, мультифункциональный',
      finish: 'Zobel (Германия) — влагостойкое покрытие',
      sealant: '4-х контурная система Deventer (Германия)',
      description: 'Природная устойчивость к влаге и гниению. Оптимальный баланс прочности и цены.',
      lifetime: 'до 60 лет'
    }
  },
  pine: {
    title: 'Ангарская Сосна',
    specs: {
      profile: 'Дерево-алюминиевый с системой Holz Plus (Комфорт)',
      hardware: 'Roto (Германия)',
      glass: 'от 44 мм, стандартный энергосберегающий',
      finish: 'Zobel (Германия) — экологичные водные лаки',
      sealant: '4-х контурная система Deventer (Германия)',
      description: 'Легкий материал с отличными теплоизоляционными свойствами и мягкой текстурой.',
      lifetime: 'до 50 лет'
    }
  }
};

