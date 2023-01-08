import Head from 'next/head'
import AwardWinning from '../components/Home/AwardWinning'
import Footer from '../components/Home/Footer'
import GetInTouch from '../components/Home/GetInTouch'
import Info from '../components/Home/Info'
import Navbar from '../components/Home/Navbar'
import ViewProjects from '../components/Home/ViewProjects'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DESIGNO</title>
      </Head>
      <Navbar/>
      <AwardWinning/>
      <ViewProjects/>
      <Info/>
      <GetInTouch/>
      <Footer/>
    </div>
  )
}
