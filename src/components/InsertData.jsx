import React, { useState, useEffect } from 'react';
import '../styles/Insert.css';
import {useNavigate} from "react-router-dom";
import {routerAuth} from "../toLog";

function InsertData() {
    const [months, setMonths] = useState([]);
    const [month, setMonth] = useState('');
    const [income, setIncome] = useState('');
    const [outcome, setOutcome] = useState('');
    const [goalsCompleted, setGoalsCompleted] = useState('');
    const [spentOnFood, setSpentOnFood] = useState('');
    const [spentOnTransport, setSpentOnTransport] = useState('');
    const [spentOnRent, setSpentOnRent] = useState('');
    const [spentOnUtilities, setSpentOnUtilities] = useState('');
    const [spentOnMisc, setSpentOnMisc] = useState('');

    const thisUserId = localStorage.getItem("userID");
    let token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        routerAuth(navigate, token);
        // Fetch existing months for the user from your API
        fetch(`http://localhost:8080/lapsins_api/financeAPI/insertReportCard.php?userId=${thisUserId}`)
            .then((response) => response.json())
            .then((data) => {
                if (data && data.length > 0) {
                    const usedMonths = data.map((item) => item.month);
                    // Filter out the months that the user has already used
                    const availableMonths = [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July',
                        'August',
                        'September',
                        'October',
                        'November',
                        'December',
                    ].filter((month) => !usedMonths.includes(month));
                    setMonths(availableMonths);
                }
            })
            .catch((error) => console.error('Error fetching months:', error));
    }, [thisUserId]);

    const handleNumericInput = (e) => {
        // Allow only numeric input (0-9) and a period (for decimal numbers)
        const validInput = /^[0-9.]+$/;

        if (!validInput.test(e.key)) {
            e.preventDefault();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure that numeric fields are converted to numbers
        const numericIncome = parseFloat(income);
        const numericOutcome = parseFloat(outcome);
        const numericGoalsCompleted = parseFloat(goalsCompleted);
        const numericSpentOnFood = parseFloat(spentOnFood);
        const numericSpentOnTransport = parseFloat(spentOnTransport);
        const numericSpentOnRent = parseFloat(spentOnRent);
        const numericSpentOnUtilities = parseFloat(spentOnUtilities);
        const numericSpentOnMisc = parseFloat(spentOnMisc);

        if (
            isNaN(numericIncome) ||
            isNaN(numericOutcome) ||
            isNaN(numericGoalsCompleted) ||
            isNaN(numericSpentOnFood) ||
            isNaN(numericSpentOnTransport) ||
            isNaN(numericSpentOnRent) ||
            isNaN(numericSpentOnUtilities) ||
            isNaN(numericSpentOnMisc)
        ) {
            alert('Please enter valid numeric values for numeric fields.');
            return;
        }

        const formData = {
            month,
            income: numericIncome,
            outcome: numericOutcome,
            goalsCompleted: numericGoalsCompleted,
            spentOnFood: numericSpentOnFood,
            spentOnTransport: numericSpentOnTransport,
            spentOnRent: numericSpentOnRent,
            spentOnUtilities: numericSpentOnUtilities,
            spentOnMisc: numericSpentOnMisc,
            userId: thisUserId,
        };

        try {
            const response = await fetch('http://localhost:8080/lapsins_api/financeAPI/insertReportCard.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Data inserted successfully');
                setMonth('');
                setIncome('');
                setOutcome('');
                setGoalsCompleted('');
                setSpentOnFood('');
                setSpentOnTransport('');
                setSpentOnRent('');
                setSpentOnUtilities('');
                setSpentOnMisc('');
            } else {
                alert('Data insertion failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="insert-page-main">
            <form onSubmit={handleSubmit} className="insert-form">
                <div className="insert-form-group">
                    <label className="insert-label">Month:</label>
                    <select value={month} onChange={(e) => setMonth(e.target.value)} className="insert-select">
                        <option value="" disabled>
                            Select a month
                        </option>
                        {months.map((m) => (
                            <option key={m} value={m} className="insert-option">
                                {m}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Income:</label>
                    <input
                        type="text"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Outcome:</label>
                    <input
                        type="text"
                        value={outcome}
                        onChange={(e) => setOutcome(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Goals Completed:</label>
                    <input
                        type="text"
                        value={goalsCompleted}
                        onChange={(e) => setGoalsCompleted(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Spent on Food:</label>
                    <input
                        type="text"
                        value={spentOnFood}
                        onChange={(e) => setSpentOnFood(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Spent on Transport:</label>
                    <input
                        type="text"
                        value={spentOnTransport}
                        onChange={(e) => setSpentOnTransport(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Spent on Rent:</label>
                    <input
                        type="text"
                        value={spentOnRent}
                        onChange={(e) => setSpentOnRent(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Spent on Utilities:</label>
                    <input
                        type="text"
                        value={spentOnUtilities}
                        onChange={(e) => setSpentOnUtilities(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <label className="insert-label">Spent on Misc:</label>
                    <input
                        type="text"
                        value={spentOnMisc}
                        onChange={(e) => setSpentOnMisc(e.target.value)}
                        onKeyPress={handleNumericInput}
                        className="insert-input"
                    />
                </div>
                <div className="insert-form-group">
                    <button type="submit" className="insert-button">
                        Insert Data
                    </button>
                </div>
                <div className="insert-form-group">
                    <button type="submit" className="insert-button">
                        Return
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InsertData;