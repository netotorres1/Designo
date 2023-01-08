import React from 'react'
import styles from './../../styles/Locations/Australia.module.css'

const Australia = () => {
  return (
    <div className={styles.containercontentcomponent}>
         <div className={styles.containercontent}>
                <div className={styles.img}></div>
                <div className={styles.containercontact}>
                    <h2 className={styles.title}>Australia</h2>
                    <div className={styles.containerAdress}>
                        <div className={styles.containerContact}>
                            <h2 className={styles.titleContact}>Designo AU Office</h2>
                            <span className={styles.spanContact}>19 Balone Street</span>
                            <span className={styles.spanContact}>New South Wales 2443</span>
                        </div>
                        <div className={styles.containerContact}>
                            <h2 className={styles.titleContact}>Contact Us</h2>
                            <span className={styles.spanContactus}>P: (02) 6702 9092</span>
                            <span className={styles.spanContactus}>M: contact@designo.au</span>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Australia