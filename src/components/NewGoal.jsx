import React from 'react';
import '../NewGoal.css'; // Import your component-specific styles

function NewGoal() {
    return (
        <div className="new-goal-cont">
            <h1 className="new-goal-title">Jauns iekrājuma mērķis</h1>
            <form className="new-goal-form">
                <label className="new-goal-label" htmlFor="new-goal-title">Title</label>
                <input
                    type="text"
                    id="new-goal-title"
                    className="new-goal-input"
                    style={{ borderRadius: '5px' }}
                />
                <label className="new-goal-label" htmlFor="new-goal-description">Description</label>
                <textarea
                    id="new-goal-description"
                    className="new-goal-textarea"
                    style={{ borderRadius: '5px' }}
                />
                <label className="new-goal-label" htmlFor="new-goal-goal">Goal - $</label>
                <input
                    type="number"
                    id="new-goal-goal"
                    className="new-goal-input"
                    style={{ borderRadius: '5px' }}
                />
                <div className="new-goal-btn-center">
                    <button className="new-goal-button">Create</button>
                </div>
            </form>
        </div>
    );
}

export default NewGoal;
