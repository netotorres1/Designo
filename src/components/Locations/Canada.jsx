import React from 'react'
import styles from './../../styles/Locations/Canada.module.css'

const Canada = () => {
  return (
    <div className={styles.containercontentcomponent} >
        <div className={styles.containercontent}>
                <div className={styles.containercontact}>
                    <h2 className={styles.title}>Canada</h2>
                    <div className={styles.containerAdress}>
                        <div className={styles.containerContact}>
                            <h2 className={styles.titleContact}>Designo Central Office</h2>
                            <span className={styles.spanContact}>3886 Wellington Street</span>
                            <span className={styles.spanContact}>Toronto, Ontario M9C 3J5</span>
                        </div>
                        <div className={styles.containerContact}>
                            <h2 className={styles.titleContact}>Contact Us (Central Office)</h2>
                            <span className={styles.spanContactus}>P: + 1 253-863-8967</span>
                            <span className={styles.spanContactus}>M: contact@designo.co</span>
                        </div>
                    </div>
                </div>
                <div className={styles.img}></div>
        </div>
    </div>
  )
}

export default Canada