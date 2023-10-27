import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';


//TODO
//need to fix numbers being more than 10.00
//need to make that the goal saved cant be -
//need to add user functionality1
function GoalsComponent() {
    const [data, setData] = useState([]);
    const [inputValues, setInputValues] = useState({});
    const user = '1'; //need to make session
    const [showMessageMap, setShowMessageMap] = useState({});


    const getRandomPlaceholder = () => {
        // Generate a random number between 1 and 100 and convert it to a string
        return Math.floor(Math.random() * 100) + 1 + '';
    };
    const getColorForSum = (sum) => {
        if (sum >= 1000) return 'color5';
        if (sum >= 500) return 'color4';
        if (sum >= 200) return 'color3';
        if (sum >= 100) return 'color2';
        return 'color1';
    };
    const getButtonStylesForSum = (sum) => {
        if (sum >= 1000) return { backgroundColor: '#9B61DD', outlineColor: '#C19CE9' };
        if (sum >= 500) return { backgroundColor: '#FFDB27', outlineColor: '#FDEE9D' };
        if (sum >= 200) return { backgroundColor: '#3FB4F0', outlineColor: '#BFDBEB' };
        if (sum >= 100) return { backgroundColor: '#74B65F', outlineColor: '#B7D8AA' };
        return { backgroundColor: '#FF2F78', outlineColor: '#FC74AC' };
    };
    const getInputBorderColor = (sum) => {
      if (sum >= 1000) return { borderColor: '#9B61DD'};
      if (sum >= 500) return { borderColor: '#FFDB27'};
      if (sum >= 200) return { borderColor: '#3FB4F0'};
      if (sum >= 100) return { borderColor: '#74B65F'};
      return { borderColor: '#FF2F78'};
    };
    const getAddBackgroundColor = (sum) => {
        if (sum >= 1000) return { backgroundColor: '#9B61DD'};
        if (sum >= 500) return { backgroundColor: '#FFDB27'};
        if (sum >= 200) return { backgroundColor: '#3FB4F0'};
        if (sum >= 100) return { backgroundColor: '#74B65F'};
        return { backgroundColor: '#FF2F78'};
    };
    useEffect(() => {
        fetch('http://localhost:8080/lapsins_api/financeAPI/goalsOutApi.php')
            .then((response) => response.json())
            .then((data) => {
                // Filter the data to show only records with user_id equal to 1 and status not equal to "completed"
                const filteredData = data.filter(
                    (goal) => goal.user_id === user && goal.status !== 'completed'
                );
                setData(filteredData);
                // Initialize input values
                const initialValues = {};
                filteredData.forEach((goal) => {
                    initialValues[goal.iekrajumu_id] = '';
                });
                setInputValues(initialValues);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const handleInputChange = (goalId, value) => {
        // Update the input value for the specified goal
        setInputValues((prevInputValues) => ({
            ...prevInputValues,
            [goalId]: value,
        }));
    };

    const handleAddButtonClick = (goalId) => {
        const inputValue = inputValues[goalId];
        // Check if the input field is not empty
        if (inputValue !== '') {
            // console.log('Sending POST request with goalId', goalId, 'and value', inputValue);

            fetch(`http://localhost:8080/lapsins_api/financeAPI/addValueToGoal.php`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ value: inputValue, goalId: goalId }),
            })
                .then((response) => response.json())
                .then((newData) => {
                    console.log('Response from server:', newData);
                    // Update the saved amount in the component state
                    const updatedData = data.map((goal) => {
                        if (goal.iekrajumu_id === goalId) {
                            // Update the saved amount for the specific goal
                            return {
                                ...goal,
                                iekrajumu_iekrajumi: parseFloat(goal.iekrajumu_iekrajumi) + parseFloat(inputValue),
                            };
                        }
                        return goal;
                    });

                    setData(updatedData);
                })
                .catch((error) => console.error('Error adding data:', error));


            // Clear the input field after adding data
            handleInputChange(goalId, '');
        }
    };

    const handleCompleteButtonClick = (goalId) => {
        // Check if the goal is completed (compare saved amount with the goal amount)
        const goal = data.find((goal) => goal.iekrajumu_id === goalId);
        console.log("test1");
        if (parseFloat(goal.iekrajumu_iekrajumi) >= parseFloat(goal.iekrajumu_sum)) {
            console.log("test2");
            // The goal is completed
            fetch('http://localhost:8080/lapsins_api/financeAPI/updateStatus.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ goalId: goalId }),
            })
                .then((response) => response.json())
                .then(() => {
                    // Goal updated in the database, remove it from the component state
                    const updatedData = data.filter((g) => g.iekrajumu_id !== goalId);
                    setData(updatedData);
                })
                .catch((error) => console.error('Error updating status:', error));
        } else {
            setShowMessageMap((prevShowMessageMap) => ({
                ...prevShowMessageMap,
                [goalId]: true,
            }));

            setTimeout(() => {
                setShowMessageMap((prevShowMessageMap) => ({
                    ...prevShowMessageMap,
                    [goalId]: false,
                }));
            }, 5000);
        }
    };


    return (
        <>
            <Sidebar />
            <div className="jauns-iekrajums-cont">
                <Link className="jauns-iekrajums-btn" to="/NewGoal">
                    Jauns Iekrājums
                </Link>
            </div>
            <div className="all-goals">
                {data.map((goal) => (
                    <div key={goal.iekrajumu_id} className="goals-container">
                        <h2
                            className={`goals-title ${getColorForSum(
                                parseFloat(goal.iekrajumu_sum)
                            )}`}
                        >
                            {goal.iekrajumu_merkis}
                        </h2>
                        <p className="goals-description">{goal.iekrajumu_desc}</p>
                        <div className="container">
                            <div className="upper-left-right-saved">
                                <div
                                     className={`top-left-right ${getColorForSum(
                                         parseFloat(goal.iekrajumu_sum)
                                     )}`}
                                >
                                    Saved - {goal.iekrajumu_iekrajumi}$
                                </div>
                                <div
                                    className={`top-left-right ${getColorForSum(
                                        parseFloat(goal.iekrajumu_sum)
                                    )}`}
                                >
                                    Goal - {goal.iekrajumu_sum}$
                                </div>
                            </div>
                            <div className="rounded-container">
                                <div style={{
                                    ...getAddBackgroundColor(parseFloat(goal.iekrajumu_sum)),
                                    width: `${(goal.iekrajumu_iekrajumi / goal.iekrajumu_sum) * 100}%`,
                                }}></div>
                            </div>
                            {/* Make the bar for % */}
                            <div className="saved-input-adder">
                                <input
                                    type="number"
                                    className="input-field"
                                    placeholder={getRandomPlaceholder()}
                                    style={getInputBorderColor(parseFloat(goal.iekrajumu_sum))}
                                    value={inputValues[goal.iekrajumu_id] || ''}
                                    onChange={(e) => handleInputChange(goal.iekrajumu_id, e.target.value)}
                                />
                                <button
                                    className="action-button"
                                    style={getAddBackgroundColor(parseFloat(goal.iekrajumu_sum))}
                                    onClick={() => handleAddButtonClick(goal.iekrajumu_id)}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        <div className="complete-btn-and-p">
                            {showMessageMap[goal.iekrajumu_id] && (
                                <p className="goal-complete-error">Goal is not reached, can't complete this goal</p>
                            )}
                            <button
                                className="complete-button"
                                style={getButtonStylesForSum(
                                    parseFloat(goal.iekrajumu_sum)
                                )}
                                onClick={() => handleCompleteButtonClick(goal.iekrajumu_id)}
                            >
                                Complete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default GoalsComponent;
