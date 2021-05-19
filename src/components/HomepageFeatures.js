import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '每日更新',
    Svg: require('../../static/img/tutorial/Daily.png').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: '足跡地圖',
    Svg: require('../../static/img/tutorial/Map.png').default,
    description: (
      <>

      </>
    ),
  },
  {
    title: '確診足跡',
    Svg: require('../../static/img/tutorial/footprint.png').default,
    description: (
      <>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
