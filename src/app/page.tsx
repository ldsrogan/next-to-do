import Link from 'next/link';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link className={styles.link} href="/todo">
          Let&rsquo;s start
        </Link>
      </div>
    </main>
  );
}
