import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                display: true,
                drawBorder: false,
            },
            ticks: {
                stepSize: 10,
                color: 'gray', 
                max: 60, 
            }
        },
        x: {
            stacked: true,
            grid: {
                display: false // Hide the x-axis grid lines
            },
            ticks: {
                color: 'gray', // Adjust tick color as needed
            }
        }
    },
    plugins: {
        legend: {
            display: false // Assuming you don't want to display a legend
        },
        title: {
            display: false,
        },
    },
};

const DepartmentBarChart = ({ data }) => {
    return (
        <div className='w-[850px] h-[280px] mt-[32px] mr-[53px]'>

            <div className="flex justify-between">
                <h2 className="text-[22px] font-semibold text-[#191B1C] mb-2">Department Performance Over Time</h2>
                <button className="w-[150px] h-[35px] font-Lato text-[12px] border-2 border-[#E0E0E0] cursor-pointer">By Percentage  ˅</button>
            </div>

            <div className='border-b-2 border-[#EAEAEA]'></div>

            <Bar options={options} data={data} />

        </div>
    );
};

export default DepartmentBarChart;
