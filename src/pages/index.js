import React, { useEffect, useState } from 'react'
import Layout from '@theme/Layout'
import styles from './styles.module.css'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Banner from './indexComponents/banner/banner'
import Features from './indexComponents/features/features'
import Examples from './indexComponents/examples/examples'
import HowItWorks from './indexComponents/howItWorks/howItWorks'
import packageVersion from '../services/package-version'
import HerbsShelf from './indexComponents/herbsShelf/herbsShelf'
import HerbsCli from './indexComponents/herbsCli/herbsCli'
import clsx from 'clsx'
import LogRocket from 'logrocket'
import environment from '../config/environment'

function Home () {
  const context = useDocusaurusContext()
  const [version, setVersion] = useState(null)

  const userZoom =
    typeof window !== 'undefined' && window.devicePixelRatio > 1
      ? `${100 / (window.devicePixelRatio * 0.9)}%`
      : `normal`

  useEffect(async () => {
    const npmMeta = await packageVersion('@herbsjs/herbs')
    if (npmMeta.package) setVersion(npmMeta.package.version)
  }, [])

  const { siteConfig = {} } = context
  LogRocket.init(environment.logRocketKey)

  return (
    <Layout description={`${siteConfig.customFields.description}`}>
      <Banner version={version} />
      <main style={{ zoom: userZoom }}>
        <Features />
        <div className={styles.section}>
          <h1>Build your Microservices in Node.js Faster and Future Proof</h1>
          <Examples />
          <h2 className={styles.h2big}>Generated On The Fly</h2>
          <div className={styles.badges}>
            <span className='badge badge--primary'>Repository</span>
            <span className='badge badge--primary'>GraphQL</span>
            <span className='badge badge--primary'>REST</span>
            <span className='badge badge--primary'>Herbs Shelf</span>
          </div>
        </div>
        <div className={styles.section}>
          <h2 className={styles.h2big}>How it works?</h2>
          <HowItWorks />
        </div>
        <div className={styles.section}>
          <h2 className={clsx([styles.h2big, styles.textLeft])}>
            Generate documentation based on your domain
          </h2>
          <HerbsShelf />
        </div>
        <div className={styles.section}>
          <h2 className={clsx([styles.h2big, styles.textRight])}>
            Use Herbs CLI to speed up your development
          </h2>
          <HerbsCli />
        </div>
      </main>
    </Layout>
  )
}

export default Home
