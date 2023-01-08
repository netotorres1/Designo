import React from 'react'
import styles from './../../styles/About/AboutUs.module.css'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div className={styles.container}>
        <article className={styles.containercontent}>
            <div className={styles.containerleft}>
               <h1 className={styles.title}>About us</h1>
               <p className={styles.p}>Founded in 2010, we are a creative agency that produces lasting results for our clients. 
                    Weve partnered with many startups, corporations, and nonprofits alike to craft designs 
                    that make real impact. Were always looking forward to creating brands, products, and 
                    digital experiences that connect with our clients' audiences.</p> 
            </div>
            <div className={styles.containerright}>
                
            </div>
        </article>
    </div>
  )
}

export default AboutUs