import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <Heading as="h1" className={styles.heroTitle}>
            Technical Documentation that Connects
          </Heading>

          <p className={styles.heroSubtitle}>
            Turning complex technology into documentation people can confidently use.
          </p>
          </div>
        <div className={styles.heroImageWrapper}>
          <img
            className={styles.heroImage}
            src="/img/bridge-reader-advocate.png"
            alt="Bridge connecting a technical team with documentation readers"
          />
        </div>

          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/docs/portfolio-overview">
              View My Work
            </Link>

            <Link
              className="button button--secondary button--lg"
              to="/about">
              About Me
            </Link>
          </div>
        </div>              
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Creating Documentation that Connects"
      description="Haletha Judkins creates clear, user-focused technical documentation for software, APIs, and complex products.">
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}