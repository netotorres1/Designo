import React from 'react'
import styles from './../../styles/AppDesign/Cards.module.css'
import Image from 'next/image'

const Cards = () => {
  return (
    <section className={styles.container}>
        <div className={styles.containercontent}>
            <div className={styles.containertop}>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/app-design/desktop/image-airfilter.jpg' alt='image-airfilter' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Airfilter</h2>
                        <p className={styles.p}>Solving the problem of poor indoor air quality by filtering the air</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/app-design/desktop/image-eyecam.jpg' alt='image-eyecam' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Eyecam</h2>
                        <p className={styles.p}>Product that lets you edit your favorite photos and videos at any time</p>
                    </div>
                </article>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/app-design/desktop/image-faceit.jpg' alt='image-faceit' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Faceit</h2>
                        <p className={styles.p}>Get to meet your favorite internet superstar with the faceit app</p>
                    </div>
                </article>
            </div>
            <div className={styles.containerbottom}>
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/app-design/desktop/image-todo.jpg' alt='image-todo' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Todo</h2>
                        <p className={styles.p}>A todo app that features cloud sync with light and dark mode</p>
                    </div>
                </article >
                <article className={styles.containercard}>
                    <Image className={styles.img} src='/assets/app-design/desktop/image-loopstudios.jpg' alt='image-loopstudios' height={380} width={380} />
                    <div className={styles.containertext}>
                        <h2 className={styles.title}>Loopstudios</h2>
                        <p className={styles.p}>A VR experience app made for Loopstudios</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Cards