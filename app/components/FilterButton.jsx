'use client';

import React from 'react';

const FilterButton = ({ label, active, onClick }) => {
    return (
        <button
            className={`${active ? 'bg-red-500 text-white' : 'bg-gray-700 text-gray-300'
                } py-2 px-4 rounded-full focus:outline-none`}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default FilterButton;
