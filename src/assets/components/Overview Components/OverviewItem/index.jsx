import React from 'react';
import styles from './index.module.css'
import { BsArrowUpRight } from "react-icons/bs"
import { BsArrowDownRight } from "react-icons/bs"


const OverviewItem = ({ icon, title, subHeading, count, itemStyle }) => {

  const color = Math.random() < 0.5 ? 'red' : "green"

  return (
    <div className={`${styles['item']} ${itemStyle}`}>
      <div className={styles['heading']}>
        {icon}
        <h1>{title}</h1>
      </div>
      <div className={styles['inner-content']}>
        <span className={styles['sub-heading']}>{subHeading}</span>
        <span className={styles['statistics']}>{color == "red" ? <BsArrowDownRight style={{fill: color}}/> : <BsArrowUpRight style={{fill: color}}/>} <span>16% this week</span></span>
        <h1 className={styles['count']}>{count}</h1>
      </div>
    </div>
  );
};

export default OverviewItem;
