import React from 'react';

const CategoryBox = ({ icon, name }) => {
  return (
    <div className="w-[170px] h-[145px] flex flex-col items-center justify-center border rounded-lg bg-white cursor-pointer shadow-md hover:bg-customRed hover:text-white">
      <div className="w-[56px] h-[56px] mb-2 flex items-center justify-center">
        <img src={icon} alt={name} className="w-full h-full object-contain hover:text-white" />
      </div>
      <p className="text-center text-sm font-medium">{name}</p>
    </div>
  );
};

export default CategoryBox;