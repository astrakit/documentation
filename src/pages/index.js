import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/getting-started">
            Get started with Astrakit - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Get started with Astrakit - your guide to quick setup and features">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" className="text--center margin-bottom--lg text--primary">
                Additional Resources
              </Heading>
              <div className="card shadow--md">
                <div className="card__header bg-primary">
                  <Heading as="h3" className="text--white">About Astrakit</Heading>
                </div>
                <div className="card__body">
                  <p>
                    Astrakit is a free and open-source chat app designed by nerds. Enjoy secure, seamless communication with powerful features and complete transparency, all without any cost.
                    Our documentation helps you get up and running quickly with comprehensive guides and examples.
                  </p>
                  
                  <Heading as="h3" className="text--primary">Quick Links</Heading>
                  <ul className="pills" style={{ listStyle: 'none', padding: 0 }}>
                    <li><Link className="button button--primary button--sm margin-right--md" to="https://github.com/astrakit">GitHub</Link></li>
                    <li><Link className="button button--primary button--sm" to="/docs/category/faq">Frequently Asked Questions</Link></li>
                  </ul>
                  
                  <Heading as="h3" className="text--primary">Community Support</Heading>
                  <p>
                    Join our growing community to get help, share ideas, and contribute to the project.
                    Visit our Astrakit Space or GitHub discussions for more information.
                  </p>
                  
                  <div className="text--center margin-top--lg">
                    <Link className="button button--primary button--lg" to="https://astrakit.cc/community">
                      Join Our Community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
