import React, { useState } from 'react'
import styles from './index.module.css'

import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from 'react-chartjs-2';

Chart.register(CategoryScale);

export default function OverviewProgress({ icon, title, itemStyle }) {

  const [chartData, setChartData] = useState({
    labels: [2004, 2003, 2006, 2002, 2005], 
    datasets: [
      {
        label: "Users Gained ",
        data: [500, 100, 203, 510, 532],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className={`${styles['item']} ${itemStyle}`}>
      <div className={styles['heading']}>
        {icon}
        <h1>{title}</h1>
      </div>
      <div className={styles['inner-content']}>
        <Pie
            data={chartData}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Users Gained between 2016-2020"
                }
              }
            }}
          />
      </div>
    </div>
  )
}
