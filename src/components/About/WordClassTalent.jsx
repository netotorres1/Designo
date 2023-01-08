import React from 'react'
import Image from 'next/image'
import styles from './../../styles/About/WorldClassTalent.module.css'

const WordClassTalent = () => {
  return (
    <div className={styles.container}>
        <article className={styles.containercontent}>
            <div className={styles.containerleft}>
                <Image className={styles.img} src='/assets/about/desktop/image-world-class-talent.jpg' alt='image-world-class-talent' height={600} width={500} />
            </div>
            <div className={styles.containerright}>
                <h1 className={styles.title}>World-class talent</h1>
                <p className={styles.p}>
                    We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully 
                    crafted from concept to launch, ensuring success in its given market. We are constantly updating 
                    our skills in a myriad of platforms.
                </p>
                <p className={styles.p}>
                    Our team is multi-disciplinary and we are not merely interested in form — content and meaning 
                    are just as important. We give great importance to craftsmanship, service, and prompt delivery. 
                    Clients have always been impressed with our high-quality outcomes that encapsulates their 
                    brand’s story and mission.
                </p>
            </div>
        </article>
    </div>
  )
}

export default WordClassTalent