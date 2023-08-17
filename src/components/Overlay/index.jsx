import React from 'react'
import styles from './index.module.css'

export default function Overlay({ onClose, content: ContentComponent }) {
  return (
    <div className={styles['overlay']}>
      <ContentComponent onClose={onClose}/>
    </div>
  )
}
