import React from 'react'
import Image from 'next/image'
import styles from './../../styles/Home/AwardWinning.module.css'
import Link from 'next/link'

const AwardWinning = () => {
  return (
    <section className={styles.container}>
        <div className={styles.containerCard}>
            <div className={styles.containerTexts}>
                <h1 className={styles.title}>Award-winning custom designs and digital branding solutions</h1>

                <p className={styles.text}>
                With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, 
                and engaging brand experiences. Find out more about our services.
                </p>

                <Link href='/about'><button className={styles.button}>Learn More</button></Link>
            </div>
            <Image src='/assets/home/desktop/image-hero-phone.png' alt='image-hero-phone' className={styles.phone} height={900} width={900} />
        </div>
    </section>
  )
}

export default AwardWinning