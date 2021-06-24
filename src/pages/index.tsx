import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>TechThoughts | Home</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hey, welcome!</span>

          <h1>Quotes, notes<br /> and more<br /> from <span>TechLeads</span> around the world</h1>

          <p>
            Get access to all the publications <br />
            <span>for $9,90/month</span>
          </p>

          <SubscribeButton />
        </section>

        <img src="/images/devdesk.svg" alt="dev's desk" />
      </main>
    </>
  )
}
