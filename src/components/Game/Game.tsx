import React, { useState } from 'react';
import GameBoard from './GameBoard.tsx';
import Counter from './Counter.tsx';
import ResetButton from './ResetButton.tsx';

const createItems = (): { hasItem: boolean; clicked: boolean }[] => {
    const gridSize = 6;
    const totalCells = gridSize * gridSize;
    const targetIndex = Math.floor(Math.random() * totalCells);

    const items: { hasItem: boolean; clicked: boolean }[] = Array(totalCells).fill({
        hasItem: false,
        clicked: false,
    });

    items[targetIndex].hasItem = true;

    return items;
};



const Game: React.FC = () => {
    const [items, setItems] = useState(createItems());
    const [attempts, setAttempts] = useState<number>(0);

    const handleCellClick = (index: number): void => {
        const updatedItems = [...items];
        updatedItems[index].clicked = true;

        if (updatedItems[index].hasItem) {
            setAttempts(attempts + 1);
        }

        setItems(updatedItems);
    };

    const handleReset = (): void => {
        const newItems = createItems();
        setItems(newItems);
        setAttempts(0);
    };

    return (
        <div className="game-container">
            <h2>Hidden Item Game</h2>
            <GameBoard items={items} onCellClick={handleCellClick} />
            <Counter attempts={attempts} />
            <ResetButton onReset={handleReset} />
        </div>
    );
};

export default Game;
