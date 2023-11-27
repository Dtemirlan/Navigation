import React from 'react';

interface CellProps {
    item: { hasItem: boolean; clicked: boolean };
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ item, onClick }) => {
    const { hasItem, clicked } = item;

    return (
        <div
            className={`cell ${clicked ? (hasItem ? 'found' : 'empty') : ''}`}
            onClick={onClick}
        >
            {clicked && hasItem && 'O'}
        </div>
    );
};

export default Cell;
