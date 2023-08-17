import React, { useState } from 'react'
import styles from './index.module.css'
import TicketsCreate from '../TicketsCreate';
import Overlay from '../../Overlay';

export default function TicketsTable({ data }) {

  const [showOverlay, setShowOverlay] = useState(false)

  let headings = Object.keys(data[1]);
  return (
    <>
      <div className={styles['table-options']}>
        <button onClick={() => setShowOverlay(true)}>+ Add Ticket</button>
        <button>Filter</button>
      </div>
      <table className={styles['table']}>
        <thead>
          <tr className={styles['table-headings']}>
            <th>Ticket ID</th>
            <th>Title</th>
            <th>State</th>
            <th>Owner</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody className={styles['table-body']}>
          {
            data.map(item => 
              <tr className={styles['ticket-item']}>
                {
                  headings.map(heading => <td>{item[heading]}</td>) 
                }
              </tr>
            )
          }
        </tbody>
      </table>
      {showOverlay && <Overlay onClose={() => setShowOverlay(false)} content={TicketsCreate} />}
    </>
  );
}
