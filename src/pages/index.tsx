import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';
import styles from './home.module.scss';
import devDesk from '../../public/images/devdesk.svg';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>for {product.amount}/month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src={devDesk} alt="dev's desk" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1J6E1LBBtzqrR9p7eCBYLFr4');

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100)
  };
  
  return {
    props: {
      product
    },
    revalidate: 60*60*24 // 24 hours
  };
}

