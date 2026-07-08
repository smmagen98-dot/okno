// src/features/product-specs/types.ts
export interface SpecDetails {
  profile: string;
  hardware: string;
  glass: string;
  finish: string;
  sealant: string;
  description: string;
  lifetime: string;
}

export type WoodType = 'oak' | 'larch' | 'pine';

export interface SpecsData {
  title: string;
  specs: SpecDetails;
}

