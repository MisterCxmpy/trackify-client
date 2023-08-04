import React from 'react';
import styles from './index.module.css'

const DashboardItem = ({ icon, title, subHeading, count, itemStyle }) => {
  return (
    <div className={`${styles['item']} ${itemStyle}`}>
      <div className={styles['heading']}>
        {icon}
        <h1>{title}</h1>
      </div>
      <div className={styles['inner-content']}>
        <span className={styles['sub-heading']}>{subHeading}</span>
        <h1 className={styles['count']}>{count}</h1>
      </div>
    </div>
  );
};

export default DashboardItem;
