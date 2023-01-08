import React from 'react'
import styles from './../../styles/Locations/Uk.module.css'

const UK = () => {
  return (
    <div className={styles.containercontentcomponent}>
        <div className={styles.containercontent}>
                <div className={styles.containercontact}>
                    <h2 className={styles.title}>United Kingdom</h2>
                    <div className={styles.containerAdress}>
                        <div className={styles.containerContact}>
                            <h2 className={styles.titleContact}>Designo UK Office</h2>
                            <span className={styles.spanContact}>13 Colorado Way</span>
                            <span className={styles.spanContact}>Rhyd-y-frc SA8 9GA</span>
                        </div>
                        <div className={styles.containerContact}>
                            <h2 className={styles.titleContact}>Contact</h2>
                            <span className={styles.spanContactus}>P: 078 3115 1400</span>
                            <span className={styles.spanContactus}>M: contact@designo.uk</span>
                        </div>
                    </div>
                </div>
                <div className={styles.img}></div>
            </div>
    </div>
  )
}

export default UK