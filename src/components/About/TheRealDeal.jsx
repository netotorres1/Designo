import React from 'react'
import styles from './../../styles/About/TheRealDeal.module.css'
import Image from 'next/image'

const TheRealDeal = () => {
  return (
    <div className={styles.container}>
        <article className={styles.containercontent}>
            
            <div className={styles.containerright}>
                <h1 className={styles.title}>The real deal</h1>
                <p className={styles.p}>
                    As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                    Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every
                    opportunity. We make design and technology more accessible and give you tools to measure success.
                </p>
                <p className={styles.p}>
                    We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, 
                    we inspire audiences to take action and drive real results.
                </p>
            </div>
            <div className={styles.containerleft}>
                <Image className={styles.img} src='/assets/about/desktop/image-real-deal.jpg' alt='image-real-deal' height={600} width={500} />
            </div>
        </article>
    </div>
  )
}

export default TheRealDeal