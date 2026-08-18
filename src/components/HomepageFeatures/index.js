import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'API Documentation',
    description:
      'Explore REST API references, authentication guidance, developer tutorials, and integration content.',
    link: '/portfolio#api-documentation',
  },
  {
    title: 'User Documentation',
    description:
      'View user guides, administrator content, procedures, and other technical samples.',
    link: '/portfolio#user-documentation',
  },

    {
    title: 'Technical Communications',
    description:
      'Read technical documents and reader-focused writing.',
    link: '/portfolio#technical-communications',
  },
  {
    title: 'Featured Projects',
    description:
      'Learn about documentation automation, Python development, docs-as-code, and process improvements.',
    link: '/projects',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--3', styles.featureColumn)}>
      <Link className={styles.featureCard} to={link}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <span className={styles.featureLink}>Explore →</span>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeading}>
          <Heading as="h2"> Explore My Work</Heading>          
        </div>

        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
