import React from 'react'
import styles from './../../styles/Home/ViewProjects.module.css'
import Link from 'next/link'

const ViewProjects = () => {
  return (
    <section className={styles.container}>
        <div className={styles.containerContent}>
            <div className={styles.cardWebDesign}>
                    <h2 className={styles.titleWebDesign}>Web Design</h2>
                    <Link href='/webdesign'><p className={styles.linkWebDesign}>view projects</p></Link>
            </div>
            <div className={styles.containerleft}>
                <div className={styles.cardAppDesign}>
                        <h2 className={styles.titleAppDesign}>App Design</h2>
                      <Link href='/appdesign'><p className={styles.linkAppDesign}>view projects</p></Link>
                </div>
                <div className={styles.cardGraphicDesign}>
                        <h2 className={styles.titleGraphicDesign}>Graphic Design</h2>
                      <Link href='/graphicdesign'><p className={styles.linkGraphicDesign}>view projects</p></Link> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default ViewProjects