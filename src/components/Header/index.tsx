import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import styles from './styles.module.scss';
import { ActiveLink } from '../ActiveLink';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/" passHref>
          <Image 
            src={logo} 
            alt="TechThoughts" 
            className={styles.logo}
          />
        </Link>

        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}