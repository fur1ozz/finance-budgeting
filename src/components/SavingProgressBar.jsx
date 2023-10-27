import React from 'react';

const SavingsProgressBar = () => {
    const goal = 100;
    const saved = 20;
    // Calculate the percentage of saved amount relative to the goal
    const percentage = (saved / goal) * 100;

    // Set a minimum width (e.g., 10%) to ensure it's visible
    const containerStyle = {
        width: `${Math.max(percentage, 10)}%`,
    };

    return (
        <div className="savings-progress-bar">
            <div className="container" style={containerStyle}>
                {/* You can add content or text within the container */}
                {`${percentage.toFixed(2)}%`}
            </div>
        </div>
    );
};

export default SavingsProgressBar;
