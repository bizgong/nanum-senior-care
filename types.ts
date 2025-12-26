
// Add React import to fix the namespace error on line 14
import React from 'react';

export interface ProgramItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}