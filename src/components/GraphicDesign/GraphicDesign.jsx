import React from 'react'
import styles from './../../styles/GraphicDesign/GraphicDesign.module.css'

const GraphicDesign = () => {
  return (
    <section className={styles.container} >
        <div className={styles.containercontent}>
            <h1 className={styles.title}>Graphic design</h1>
            <p className={styles.p}>We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
        </div>
    </section>
  )
}

export default GraphicDesign