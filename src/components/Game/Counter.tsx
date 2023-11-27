import React from 'react';

interface AttemptsCounterProps {
    attempts: number;
}

const Counter: React.FC<AttemptsCounterProps> = ({ attempts }) => {
    return <div>Attempts: {attempts}</div>;
};

export default Counter;
