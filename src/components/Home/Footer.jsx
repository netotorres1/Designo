import React from 'react'
import Image from 'next/image'
import styles from './../../styles/Home/Footer.module.css'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.containerFooter}>
            <div className={styles.footernav}>
                <Image className={styles.footerlogo} src='/assets/shared/desktop/logo-light.png' alt='logo-light' height={15} width={150} />
                <nav className={styles.footercontainernav}>
                    <Link href='/about'><button className={styles.itemnav}>Our Company</button></Link>
                    <Link href='/locations'><button className={styles.itemnav}>Locations</button></Link>
                    <Link href='/contact'><button className={styles.itemnav}>Contact</button></Link>
                </nav>
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.containerContact}>
                    <h2 className={styles.titleContact}>Designo Central Office</h2>
                    <span className={styles.spanContact}>3886 Wellington Street</span>
                    <span className={styles.spanContact}>Toronto, Ontario M9C 3J5</span>
                </div>
                <div className={styles.containerContact}>
                    <h2 className={styles.titleContact}>Contact Us (Central Office)</h2>
                    <span className={styles.spanContactus}>P: + 1 253-863-8967</span>
                    <span className={styles.spanContactus}>M: contact@designo.co</span>
                </div>
                <div className={styles.containerImage}>
                    <Image className={styles.icon} src='/assets/shared/desktop/icon-facebook.svg' alt='icon-facebook' height={20} width={20} />
                    <Image className={styles.icon} src='/assets/shared/desktop/icon-youtube.svg' alt='icon-youtube' height={20} width={20} />
                    <Image className={styles.icon} src='/assets/shared/desktop/icon-twitter.svg' alt='icon-twitter' height={20} width={20} />
                    <Image className={styles.icon} src='/assets/shared/desktop/icon-pinterest.svg' alt='icon-pinterest' height={20} width={20} />
                    <Image className={styles.icon} src='/assets/shared/desktop/icon-instagram.svg' alt='icon-instagram' height={20} width={20} />
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer