import React, { useEffect, useState } from 'react';

function ReportCard() {
    const [data, setData] = useState(null); // Change the initial state to null
    const user = 1; // User ID for filtering data

    useEffect(() => {
        // Fetch data from the API
        fetch(`http://localhost:8080/lapsins_api/financeAPI/reportCardOutApi.php?user_id=${user}`)
            .then((response) => response.json())
            .then((reportData) => {
                // Assuming you expect one record for the user, or you can choose a specific record
                setData(reportData[0]); // Assuming the data is an array of records
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (data === null) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Report Card</h1>
            <table>
                <thead>
                <tr>
                    <th>Month</th>
                    <th>Income</th>
                    <th>Outcome</th>
                    <th>Goals Completed</th>
                    <th>Spent on Food</th>
                    <th>Spent on Transport</th>
                    <th>Spent on Rent</th>
                    <th>Spent on Utilities</th>
                    <th>Spent on Misc</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.month}</td>
                    <td>{data.income}</td>
                    <td>{data.outcome}</td>
                    <td>{data.goals_completed}</td>
                    <td>{data.spent_on_food}</td>
                    <td>{data.spent_on_transport}</td>
                    <td>{data.spent_on_rent}</td>
                    <td>{data.spent_on_utilities}</td>
                    <td>{data.spent_on_misc}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ReportCard;
