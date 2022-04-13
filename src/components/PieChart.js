import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJs } from 'chart.js/auto';

export default function BarChart({chartData}) {
  return (
    <div>BarChart
        <Pie data={
                {
                  labels: chartData.stats.map(stat=> stat.stat.name),
                  datasets: [{
                    label:"Base Stats",
                    data:chartData.stats.map(stat=> stat.base_stat),
                    backgroundColor: ['#403F1C' , '#2C2B3C' , '#1B2432' , '#121420' , '#B76D68' , '#dae134']
                  }]
                }
              } options={{
              scales: {
                  y: {
                      min: 0,
                      
                  }
              }
            }}>

            </Pie>
    </div>
  )
}
