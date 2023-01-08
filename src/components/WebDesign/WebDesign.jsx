import React from 'react'
import styles from './../../styles/WebDesign/WebDesign.module.css'

const WebDesign = () => {
  return (
    <section className={styles.container} >
        <div className={styles.containercontent}>
            <h1 className={styles.title}>Web Design</h1>
            <p className={styles.p}>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        </div>
    </section>
  )
}

export default WebDesign