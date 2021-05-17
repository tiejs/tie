import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: <>TypeScript</>,
    description: (
      <>
        默认使用<strong>TypeScript</strong>，提供良好的开发体验
      </>
    ),
  },
  {
    title: <>Dependency Injection</>,
    description: <>使用依赖注入组织代码，易于写出可维护性、可读性、可测试性的代码</>,
  },
  {
    title: <>Extensible</>,
    description: <>强大的插件机制，让框架灵活、易于扩展</>,
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ marginTop: 20 }}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
