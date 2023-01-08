import React from 'react'
import styles from './../../styles/AppDesign/AppDesign.module.css'

const AppDesign = () => {
  return (
    <section className={styles.container} >
        <div className={styles.containercontent}>
            <h1 className={styles.title}>App design</h1>
            <p className={styles.p}>Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
        </div>
    </section>
  )
}

export default AppDesign