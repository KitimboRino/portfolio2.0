'use client';

import React from 'react';

const FilterButton = ({ label, active, onClick }) => {
    return (
        <button
            className={`${active ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'
                } py-1 px-4 rounded-xl focus:outline-none hover:scale-105 transition-transform duration-300 ease-in-out`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FilterButton;
