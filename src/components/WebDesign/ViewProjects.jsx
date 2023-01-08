import React from 'react'
import styles from './../../styles/WebDesign/ViewProjects.module.css'
import Link from 'next/link'


const ViewProjects = () => {
  return (
    <div className={styles.container}>
        <section className={styles.containercontent}>
            <div className={styles.cardAppDesign}>
                <h1 className={styles.title}>App Design</h1>
              <Link href='/appdesign'><p className={styles.p}>View Projects</p></Link> 
            </div>
            <div className={styles.cardGraphicDesign}>
                <h1 className={styles.title}>Graphic Design</h1>
                <Link href='/graphicdesign'><p className={styles.p}>View Projects</p></Link>
            </div>
        </section>
    </div>
  )
}

export default ViewProjects