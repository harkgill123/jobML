import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, TooltipItem, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  statsData: {
    totalUsers: number;
    totalRecruiters: number;
    totalApplicants: number;
    totalJobPostings: number;
    dataScienceRoles: number;
    frontendRoles: number;
    backendRoles: number;
  };
};

const PieChart: React.FC<PieChartProps> = ({ statsData }) => {
  // Create the data object using statsData
  const data = {
    labels: ['Data Science', 'Frontend', 'Backend', 'Other'],
    datasets: [
      {
        label: '# of Votes',
        data: [
          statsData.dataScienceRoles,
          statsData.frontendRoles,
          statsData.backendRoles,
          statsData.totalJobPostings - (
            statsData.dataScienceRoles +
            statsData.frontendRoles +
            statsData.backendRoles
          ),
        ],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#cc65fe',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#cc65fe',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Breakdown of Jobs',
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: TooltipItem<'doughnut'>) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
              const percentage = context.parsed as number / total;
              label += new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2 }).format(percentage);
            }
            return label;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default PieChart;
