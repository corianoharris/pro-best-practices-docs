import React from 'react';
import {clsx} from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Display Empathy',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Utilzing empathy in every aspect of my life!</>,
  },
  {
    title: 'Creative Problem-Solving',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>Create problem-solving is intelligence having fun!</>,
  },
  {
    title: 'Be a resource',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: <>I strive to learn, so I can be of help!</>,
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
