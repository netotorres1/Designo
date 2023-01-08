import React from 'react'
import Image from 'next/image'
import styles from './../../styles/WebDesign/WebSites.module.css'

const WebSites = () => {
  return (
    <section className={styles.container}>
        <div className={styles.containercontent}>
            <div className={styles.containertop}>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/web-design/desktop/image-express.jpg' alt='image-express' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>express</h2>
                        <p className={styles.p}>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/web-design/desktop/image-transfer.jpg' alt='image-transfer' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Transfer</h2>
                        <p className={styles.p}>Site for low-cost money transfers and sending money within seconds</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/web-design/desktop/image-photon.jpg' alt='image-photon' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Photon</h2>
                        <p className={styles.p}>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                    </div>
                </article>
            </div>
            <div className={styles.containerbottom}>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/web-design/desktop/image-builder.jpg' alt='image-builder' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Builder</h2>
                        <p className={styles.p}>Connects users with local contractors based on their location</p>
                    </div>
                </article >
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/web-design/desktop/image-blogr.jpg' alt='image-blogr' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Blogr</h2>
                        <p className={styles.p}>Blogr is a platform for creating an online blog or publication</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/web-design/desktop/image-camp.jpg' alt='image-camp' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Camp</h2>
                        <p className={styles.p}>Get expert training in coding, data, design, and digital marketing</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default WebSites