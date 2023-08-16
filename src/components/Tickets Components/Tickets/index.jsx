import React from 'react'
import styles from './index.module.css'
import TicketsTable from '../TicketsTable';

const data = [{
  TicketID: '0',
  Title: 'Michau',
  State: '24',
  Owner: 'Male',
  Tags: 'Male',
}, {
  TicketID: '1',
  Title: 'Bloggs',
  State: '27',
  Owner: 'Male',
  Tags: 'Male',
}, {
  TicketID: '2',
  Title: 'Doe',
  State: '22',
  Owner: 'Female',
  Tags: 'Male',
}];

export default function Tickets() {
  return (
    <TicketsTable data={data}/>
  )
}
