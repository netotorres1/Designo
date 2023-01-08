import React from 'react'
import styles from './../../styles/GraphicDesign/Cards.module.css'
import Image from 'next/image'

const Cards = () => {
  return (
    <section className={styles.container}>
        <div className={styles.containercontent}>
            <div className={styles.containertop}>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/graphic-design/desktop/image-change.jpg' alt='image-change' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Tim Brown</h2>
                        <p className={styles.p}>A book cover designed for Tim Brown’s new release, ‘Change’</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/graphic-design/desktop/image-boxed-water.jpg' alt='image-boxed-water' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Boxed water</h2>
                        <p className={styles.p}>A simple packaging concept made for Boxed Water</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/graphic-design/desktop/image-science.jpg' alt='image-science' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Science!</h2>
                        <p className={styles.p}>A poster made in collaboration with the Federal Art Project</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Cards