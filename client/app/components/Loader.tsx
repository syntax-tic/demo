import React from 'react'
import styles from './Loader.module.css'
const Loader = () => {
  return (
    <div className={styles.loader}>
    <div className={styles.loader__bar} />
    <div className={styles.loader__bar} />
    <div className={styles.loader__bar} />
    <div className={styles.loader__bar} />
    <div className={styles.loader__bar} />
    <div className={styles.loader__ball} />
  </div>
  )
}

export default Loader
