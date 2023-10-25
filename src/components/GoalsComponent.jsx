import React from 'react';
import {Link} from "react-router-dom";
import Sidebar from "./Sidebar";

function GoalsComponent() {
    return (
        <>
            <Sidebar />
            <div className="jauns-iekrajums-cont">
                <Link className="jauns-iekrajums-btn" to="/NewGoal">Jauns Iekrājums</Link>
            </div>
            <div className="all-goals">
                <div className="goals-container">
                    <h2 className="goals-title">Goal Title</h2>
                    <p className="goals-description">Goal description goes here. This component has a specific width and height.</p>
                    <div className="container">
                        <div className="upper-left-right-saved">
                            <div className="top-left-right">Saved - 70$</div>
                            <div className="top-left-right">Goal - 100$</div>
                        </div>
                        <div className="rounded-container"></div>
                        {/* Add your content here */}
                        <div className="saved-input-adder">
                            <input
                                type="number"
                                className="input-field"
                                placeholder="30"
                            />
                            <button className="action-button">Add</button>
                        </div>
                    </div>
                    <button className="complete-button">Complete</button>
                </div>
                <div className="goals-container">
                    <h2 className="goals-title">Goal Title</h2>
                    <p className="goals-description">Goal description goes here. This component has a specific width and height.</p>
                    <div className="container">
                        <div className="upper-left-right-saved">
                            <div className="top-left-right">Saved - 70$</div>
                            <div className="top-left-right">Goal - 100$</div>
                        </div>
                        <div className="rounded-container"></div>
                        {/* Add your content here */}
                        <div className="saved-input-adder">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="30"
                            />
                            <button className="action-button">Add</button>
                        </div>
                    </div>
                    <button className="complete-button">Complete</button>
                </div>
                <div className="goals-container">
                    <h2 className="goals-title">Goal Title</h2>
                    <p className="goals-description">Goal description goes here. This component has a specific width and height.</p>
                    <div className="container">
                        <div className="upper-left-right-saved">
                            <div className="top-left-right">Saved - 70$</div>
                            <div className="top-left-right">Goal - 100$</div>
                        </div>
                        <div className="rounded-container"></div>
                        {/* Add your content here */}
                        <div className="saved-input-adder">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="30"
                            />
                            <button className="action-button">Add</button>
                        </div>
                    </div>
                    <button className="complete-button">Complete</button>
                </div>
                <div className="goals-container">
                    <h2 className="goals-title">Goal Title</h2>
                    <p className="goals-description">Goal description goes here. This component has a specific width and height.</p>
                    <div className="container">
                        <div className="upper-left-right-saved">
                            <div className="top-left-right">Saved - 70$</div>
                            <div className="top-left-right">Goal - 100$</div>
                        </div>
                        <div className="rounded-container"></div>
                        {/* Add your content here */}
                        <div className="saved-input-adder">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="30"
                            />
                            <button className="action-button">Add</button>
                        </div>
                    </div>
                    <button className="complete-button">Complete</button>
                </div>
                <div className="goals-container">
                    <h2 className="goals-title">Goal Title</h2>
                    <p className="goals-description">Goal description goes here. This component has a specific width and height.</p>
                    <div className="container">
                        <div className="upper-left-right-saved">
                            <div className="top-left-right">Saved - 70$</div>
                            <div className="top-left-right">Goal - 100$</div>
                        </div>
                        <div className="rounded-container"></div>
                        {/* Add your content here */}
                        <div className="saved-input-adder">
                            <input
                                type="text"
                                className="input-field"
                                placeholder="30"
                            />
                            <button className="action-button">Add</button>
                        </div>
                    </div>
                    <button className="complete-button">Complete</button>
                </div>
            </div>
        </>
    );
}

export default GoalsComponent;
