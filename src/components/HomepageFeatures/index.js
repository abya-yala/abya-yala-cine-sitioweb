import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ontologías',
    Svg: require('@site/static/img/festivales-abya-yala.rdf.svg').default,
    description: (
      <>
        Desarrollo de ontologías para la accesibilidad y la preservación del patrimonio
        audiovisual de Abya Yala.
      </>
    ),
  },
  {
    title: 'Representación del conocimiento',
    Svg: require('@site/static/img/jerarquia-clases-declarada-completa.svg').default,
    description: (
      <>
        Representación del conocimiento comunitario e institucional a través de vocabularios 
        controlados.
      </>
    ),
  },
  {
    title: 'Aplicaciones',
    Svg: require('@site/static/img/app-icon.svg').default,
    description: (
      <>
        Creación de aplicativos para el uso de las comunidades y organizaciones involucradas 
        en la producción y diseminación del cine autóctono de Abya Yala.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
