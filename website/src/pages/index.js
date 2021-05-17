import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <ul className="feature">
          <li>
            <a href="https://github.com/koajs/koa" target="_blank">
              Koa
            </a>
          </li>
          <li>
            <a href="https://www.typescriptlang.org/" target="_blank">
              TypeScript
            </a>
          </li>
          <li>
            <a href="/docs/basic/controller" target="_blank">
              Restful
            </a>
          </li>
          <li>
            <a href="/docs/basic/graphql" target="_blank">
              GraphQL
            </a>
          </li>
          <li>
            <a href="/docs/basic/provider" target="_blank">
              Dependency Injection
            </a>
          </li>
          <li>
            <a href="/docs/basic/middleware" target="_blank">
              Middleware
            </a>
          </li>
          <li>
            <a href="/docs/basic/plugin" target="_blank">
              Plugin
            </a>
          </li>
        </ul>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro/quick-start">
            快速开始
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
