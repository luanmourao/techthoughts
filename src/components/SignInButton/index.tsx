import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';
import styles from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();

  console.log(session);
  
  return session ? (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <FaGithub color="#02c95c" />
      {session.user.name}
      <FiX color="#A8A8B3" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick={() => signIn('github')}
    >
      <FaGithub color="#F1416F" />
      Sign in with Github
    </button>
  )
}