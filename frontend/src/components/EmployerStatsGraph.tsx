import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

// Define the data structure you provided
const dataPoints = [
  ["Python", 500],
  ["Java", 400],
  ["JavaScript", 30],
  ["CSS", 30],
  ["HTML", 20],
  ["C", 300],
];

const StatsGraph: React.FC = () => {
  // Extract the labels and values from the dataPoints array
  const labels = dataPoints.map((dp) => dp[0]);
  const values = dataPoints.map((dp) => dp[1]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Number of Jobs per Skill',
        data: values,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Total Skills per Applicant',
        font: {
          size: 24,
        },
      },
      legend: {
        display: true,
        position: 'bottom' as const, // Change here
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  

  return <Bar data={data} options={options} />;
};

export default StatsGraph;
