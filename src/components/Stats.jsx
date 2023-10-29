import React, { useEffect, useState } from 'react';
import '../style/stats.css';
import { ResponsiveContainer, PieChart, Pie, Cell, Label } from 'recharts';



function ReportCard() {
    const [data, setData] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState('');

    useEffect(() => {
        // Fetch report card data
        fetch('http://localhost:8888/api/reportCardOutApi.php')
            .then((response) => response.json())
            .then((reportData) => {
                setData(reportData);
                if (reportData.length > 0) {
                    const availableMonths = reportData.map((item) => item.month);
                    setSelectedMonth(availableMonths[0]);
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (data.length === 0) {
        return <p>Loading...</p>;
    }
    const calculateIetaupijumi = () => {
        if (filteredData) {
            const income = parseFloat(filteredData.income);
            const outcome = parseFloat(filteredData.outcome);

            if (!isNaN(income) && !isNaN(outcome)) {
                return (income - outcome).toFixed(2);
            }
        }
        return '0.00%'; 
    };
    

    const filteredData = data.find((item) => item.month === selectedMonth);

    const calculateDataForChart = () => {
        if (filteredData) {
            const totalSpending = parseFloat(filteredData.spent_on_food) +
                parseFloat(filteredData.spent_on_transport) +
                parseFloat(filteredData.spent_on_rent) +
                parseFloat(filteredData.spent_on_utilities) +
                parseFloat(filteredData.spent_on_misc);
    
            const chartData = [
                { name: 'Food', value: Math.ceil((parseFloat(filteredData.spent_on_food) / totalSpending) * 100) },
                { name: 'Transport', value: Math.ceil((parseFloat(filteredData.spent_on_transport) / totalSpending) * 100) },
                { name: 'Rent', value: Math.ceil((parseFloat(filteredData.spent_on_rent) / totalSpending) * 100) },
                { name: 'Utilities', value: Math.ceil((parseFloat(filteredData.spent_on_utilities) / totalSpending) * 100) },
                { name: 'Misc', value: Math.ceil((parseFloat(filteredData.spent_on_misc) / totalSpending) * 100) },
            ];
            return chartData;
        }
        return [];
    };
    
    function CustomLegend({ data }) {
        return (
            
            <ul className="legend">
                {data.map((entry, index) => (
                    <li key={`legend-${entry.name}`}>
                        <span className="legend-color" style={{ backgroundColor: COLORS[index] }}></span>
                        {entry.name}
                    </li>
                ))}
            </ul>
        );
    }
    

    const COLORS = ['#0088FE', '#00C49F', '#D8275A', '#FF8042', '#8884D8', '#FF8042', '#00C49F', '#8884D8'];

    return (
        
        
        <div className='report-card-main'>
            <div className="report-card-top">
                <div className='report-card-rightBox'>
                    <p className='report-card-p'>Date</p>
                    <img src="/pictures/right-arrow.png" alt="report card image" className="report-card-centered-image" />
                    <div className="report-card-dropdown">
                        <select
                            className='report-card-option'
                            value={selectedMonth}
                            onChange={(e) => setSelectedMonth(e.target.value)}
                        >
                            {data.map((item, index) => (
                                <option key={index} value={item.month}>
                                    {item.month}
                                </option>
                            ))}
                        </select>
                        <img src="/pictures/clock.png" alt="Report card image" className="report-card-calendar" />
                    </div>
                </div>
            </div>
            <div className='report-card-lower'>
            <div className='report-card-info2'>
                        <div className='report-card-up'>
                            <img src="/pictures/up-arrow.png" alt="report card image" className="report-card-upimg" />
                        </div>
                        <div className='report-card-text'>
                            <div className="value-and-text">
                                <p className='report-card-value'>{filteredData.income}</p>
                                <p className='report-card-text-under-value'>Ienakumi</p>
                            </div>
                        </div>
                    </div>
                    <div className='report-card-info'>
                        <div className='report-card-up'>
                            <img src="/pictures/up-arrow.png" alt="report card image" className="report-card-upimg" />
                        </div>
                        <div className='report-card-text'>
                            <div className="value-and-text">
                                <p className='report-card-value'>{filteredData.outcome}</p>
                                <p className='report-card-text-under-value'>Izmaksas</p>
                            </div>
                        </div>
                    </div>
                    <div className='report-card-info2'>
                        <div className='report-card-up1'>
                            <img src="/pictures/save-money (1).png" alt="report card image" className="report-card-upimg1" />
                        </div>
                        <div className='report-card-text'>
                            <div className="value-and-text">
                                <p className='report-card-value1'>{calculateIetaupijumi()}</p>
                                <p className='report-card-text-under-value'>Ietaupijumi</p>
                            </div>
                        </div>
                    </div>
                    <div className='report-card-info1'>
                        <div className='report-card-up1'>
                            <img src="/pictures/banknote.png" alt="report card image" className="report-card-upimg1" />
                        </div>
                        <div className='report-card-text'>
                            <div className="value-and-text">
                                <p className='report-card-value'>{filteredData.goals_completed}</p>
                                <p className='report-card-text-under-value'>Izpildītie iekrājuma mērķi</p>
                            </div>
                        </div>
                    </div>

            </div>

            {filteredData && (
    <div className='report-card-sector'>
        <div className='report-card-right-sector'>
            <div className='legend-container'>
            <CustomLegend data={calculateDataForChart()} />
        </div>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                <Pie
    data={calculateDataForChart()}
    dataKey="value"
    nameKey="name"
    cx="50%"
    cy="50%"
    outerRadius={80}
    fill="#8884d8"
    labelLine={false} // This removes the lines
    label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" font-fontWeight={'bold'} textAnchor="middle" dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }}
>
    {calculateDataForChart().map((entry, index) => (
        <Cell key={`cell-${entry.name}`} fill={COLORS[index]} />
    ))}
</Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
)}

        </div>
    );
}


export default ReportCard;