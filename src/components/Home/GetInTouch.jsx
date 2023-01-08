import React from 'react'
import styles from './../../styles/Home/GetInTouch.module.css'
import Link from 'next/link'

const GetInTouch = () => {
  return (
    <section className={styles.container}>
        <section className={styles.cotainerComponent}>
            <div className={styles.containerText}>
                <h1 className={styles.title}>Let’s talk about your project</h1>
                <p className={styles.p}>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
                    </p>
            </div>
           <Link href='/contact'><button className={styles.button}>Get in touch</button></Link> 
        </section>
        
    </section>
  )
}

export default GetInTouch