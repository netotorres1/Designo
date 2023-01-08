import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home/Info.module.css'

const Info = () => {
  return (
    <section className={styles.container} >
        <div className={styles.containersection}>
            <article className={styles.containerItem}>
                <Image className={styles.Img} src='/assets/home/desktop/illustration-passionate.svg' alt='illustration-passionate' height={150} width={150} />
                <div className={styles.containerinfo}>
                    <h2 className={styles.title}>Passionate</h2>
                    <p className={styles.p}>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
                        art, design, and technology into exciting new solutions.</p>
                </div>
            </article>
            <article className={styles.containerItem}>
                <Image className={styles.Img} src='/assets/home/desktop/illustration-resourceful.svg' alt='illustration-resourceful' height={150} width={150} />
                <div className={styles.containerinfo}>
                    <h2 className={styles.title}>Resourceful</h2>
                    <p className={styles.p}>
                    Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
                    collaboration. It guarantees superior results that fulfill our clients’ needs.
                    </p>
                </div>
            </article>
            <article className={styles.containerItem}>
                <Image className={styles.Img} src='/assets/home/desktop/illustration-friendly.svg' alt='illustration-friendly' height={150} width={150} />
                <div className={styles.containerinfo}>
                    <h2 className={styles.title}>Friendly</h2>
                    <p className={styles.p}>
                    We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
                    strive to give them the best experience a company can provide.
                    </p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Info