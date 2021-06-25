import { SignInButton } from '../SignInButton';
import Image from 'next/image';
import logo from '../../../public/images/logo.svg';
import styles from './styles.module.scss';

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="TechThoughts" />

        <nav>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">Posts</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}