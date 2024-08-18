"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [1003, 2000, 3424],
                backgroundColor: ['#145a32', '#229954', '#2ecc71']
            }
        ],
        labels: ['Bank 1', 'Bank 2', 'Bank 3']
    }
    
    return <Doughnut data=
    {data} 
    options={{
        cutout: "60%",
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
}

export default DoughnutChart