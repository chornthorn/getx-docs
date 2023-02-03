import Link from '@docusaurus/Link';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <HomepageCTA />
        <HomepageHeroImage />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description={`The official documentation site for Getx Library. ${siteConfig.tagline}.`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

function HomepageCTA() {
  return (
    <div className={styles.width}>
      <Link className="button button--primary button--lg" to="/docs">
        Get Started
      </Link>
    </div>
  );
}

function HomepageHeroImage() {
  const { colorMode } = useColorMode();
  return (
    <img
      className={clsx(styles.heroImage)}
      src={colorMode == 'dark' ? 'img/hero_dark.svg' : 'img/hero.svg'}
      alt="Hero"
      width="720"
    />
  );
}

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'State & Reactive Programming Management',
    Svg: require('@site/static/img/pillar1.svg').default,
    description: (
      <>
        Getx is a library that helps you to manage your app state, reactive
        programming and User Interface (UI) to your Business Logic (Back-end) in
        a simple and intuitive way.
      </>
    ),
  },
  {
    title: 'Navigation & Routing Management',
    Svg: require('@site/static/img/pillar2.svg').default,
    description: (
      <>
        with Getx you can manage all your app navigation and routing in a simple
        and intuitive way. Getx is based on the well-known Navigator 2.0 API.
      </>
    ),
  },
  {
    title: 'Dependency Management',
    Svg: require('@site/static/img/pillar3.svg').default,
    description: (
      <>
        Getx is a dependency injection manager. It helps you to manage your
        dependencies in a simple and intuitive way.
      </>
    ),
  },
  {
    title: 'Get CLI',
    Svg: require('@site/static/img/pillar3.svg').default,
    description: (
      <>
        Get CLI is a tool that helps you to create your Getx projects in a
        simple and intuitive way.
      </>
    ),
  },
  {
    title: 'Get Connect',
    Svg: require('@site/static/img/pillar3.svg').default,
    description: (
      <>
        GetConnect is an easy way to communicate from your back to your front
        with http or websockets.
      </>
    ),
  },
  {
    title: 'Localizations',
    Svg: require('@site/static/img/pillar3.svg').default,
    description: (
      <>
        Getx is a library that helps you to manage your app localizations in a
        simple and intuitive way.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
