// src/components/CategoriesGrid.jsx

import React from 'react';
import CategoryBox from './CategoryBox';
import { categories } from '../constants/category';

const CategoriesGrid = () => {
  return (
    <div className="flex flex-wrap gap-[30px] justify-center">
      {categories.map((category) => (
        <CategoryBox key={category.id} icon={category.icon} name={category.name} />
      ))}
    </div>
  );
};

export default CategoriesGrid;
