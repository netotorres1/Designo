import React from 'react'
import styles from './../../styles/About/Countries.module.css'
import Image from 'next/image'

const Countries = () => {
  return (
    <div className={styles.container}>
        <section className={styles.containercontent}>
            <div className={styles.item}>
                <div className={styles.containerimg}>
                    <Image className={styles.img} src='/assets/shared/desktop/illustration-canada.svg' alt='illustration-canada' height={150} width={150} />
                </div>
                <div className={styles.containerbutton}>
                    <h2 className={styles.title}>Canada</h2>
                    <button className={styles.button}>See location</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.containerimg}>
                    <Image className={styles.img} src='/assets/shared/desktop/illustration-australia.svg' alt='illustration-australia' height={150} width={150} />
                </div>
                <div className={styles.containerbutton}>
                    <h2 className={styles.title} >Australia</h2>
                    <button className={styles.button}>See location</button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.containerimg}>
                    <Image className={styles.img} src='/assets/shared/desktop/illustration-united-kingdom.svg' alt='illustration-united-kingdom' height={150} width={150} />
                </div>
                <div className={styles.containerbutton}>
                    <h2 className={styles.title}>United Kingdom</h2>
                    <button className={styles.button}>See location</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Countries