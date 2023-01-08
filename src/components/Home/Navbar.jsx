import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home/Navbar.module.css'
import Link from 'next/link'
import { useState } from 'react'


const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const handleMenu = (e) => {
    setMenu(!menu)
  }

  return (
    <header className={styles.navbar}>
        <div className={styles.container}>
            <Link href='/'><Image className={styles.logo} src='/assets/shared/desktop/logo-dark.png' alt='logo-dark' height={20} width={150} /></Link>
            {menu === true ? <nav className={styles.listitems}>
                <Link href='/about' ><button className={styles.listitem}>Our Company</button></Link>
                <Link href='/locations'><button className={styles.listitem}>Locations</button></Link>
                <Link href='/contact'><button className={styles.listitem}>Contact</button></Link>
            </nav> : <></>}
            <Image onClick={handleMenu} className={styles.hambuber} src='/assets/shared/mobile/icon-hamburger.svg' alt='icon-hamburger.svg' height={50} width={50} />
        </div>
    </header>
  )
}

export default Navbar