import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    content: (
      <p>
        GetX everything is reactive, and nothing depends on code generators, increasing your productivity in all aspects of your development.
      </p>
    ),
    image: (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="96px" height="96px"><linearGradient id="rA1kdN3apPBfOwTRFzFkZa" x1="32" x2="32" y1="7" y2="14" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#rA1kdN3apPBfOwTRFzFkZa)" d="M24.602,14h14.796c1.493,0,2.759-1.098,2.97-2.576L43,7H21l0.632,4.424 C21.843,12.902,23.109,14,24.602,14z M38,10c0.552,0,1,0.448,1,1c0,0.552-0.448,1-1,1s-1-0.448-1-1C37,10.448,37.448,10,38,10z M30,10c0.372,0,3.625,0,4,0c0.552,0,1,0.448,1,1c0,0.552-0.448,1-1,1c-0.375,0-3.628,0-4,0c-0.552,0-1-0.448-1-1 C29,10.448,29.448,10,30,10z"/><linearGradient id="rA1kdN3apPBfOwTRFzFkZb" x1="32" x2="32" y1="6" y2="58" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#rA1kdN3apPBfOwTRFzFkZb)" d="M44,58H20c-2.757,0-5-2.243-5-5V11c0-2.757,2.243-5,5-5h24c2.757,0,5,2.243,5,5v42 C49,55.757,46.757,58,44,58z M20,8c-1.654,0-3,1.346-3,3v42c0,1.654,1.346,3,3,3h24c1.654,0,3-1.346,3-3V11c0-1.654-1.346-3-3-3H20z"/></svg>
    ),
    imageAlign: 'top',
    title: 'State Manager'
  },
  {
    content: (
      <p>
        GetX is easy to manage route between screen.
      </p>
    ),
    image: (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="96px" height="96px"><linearGradient id="xDtPBldXQ4NZo9oc1I2b1a" x1="32" x2="32" y1="9.833" y2="54.335" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#xDtPBldXQ4NZo9oc1I2b1a)" d="M55,43c1.654,0,3-1.346,3-3V14c0-1.654-1.346-3-3-3H23c-1.654,0-3,1.346-3,3v3H9 c-1.654,0-3,1.346-3,3v30c0,1.654,1.346,3,3,3h14h2h30c1.654,0,3-1.346,3-3v-2c0-1.654-1.346-3-3-3h-5v-2H55z M22,14 c0-0.552,0.448-1,1-1h32c0.552,0,1,0.448,1,1v26c0,0.552-0.448,1-1,1h-5H28h-5c-0.552,0-1-0.448-1-1V14z M20,31h-8v-6h8V31z M8,50 V20c0-0.552,0.448-1,1-1h11v4h-8c-1.103,0-2,0.897-2,2v6c0,1.103,0.897,2,2,2h8v7c0,1.654,1.346,3,3,3h5v2h-5 c-1.302,0-2.402,0.838-2.816,2H12c-1.103,0-2,0.897-2,2v2H9C8.448,51,8,50.552,8,50z M20.184,51H12v-2h8v1 C20,50.353,20.072,50.686,20.184,51z M55,47c0.552,0,1,0.448,1,1v2c0,0.552-0.448,1-1,1h-5c0-1.103-0.897-2-2-2H30 c-1.103,0-2,0.897-2,2h-3h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h5h22H55z M48,45H30v-2h18V45z"/><linearGradient id="xDtPBldXQ4NZo9oc1I2b1b" x1="39" x2="39" y1="9.833" y2="54.335" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#xDtPBldXQ4NZo9oc1I2b1b)" d="M26,39h26c1.103,0,2-0.897,2-2V17c0-1.103-0.897-2-2-2H26c-1.103,0-2,0.897-2,2v20 C24,38.103,24.897,39,26,39z M26,17h26v20H26V17z"/><linearGradient id="xDtPBldXQ4NZo9oc1I2b1c" x1="14" x2="14" y1="9.833" y2="54.335" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#xDtPBldXQ4NZo9oc1I2b1c)" d="M10 35H18V37H10z"/><linearGradient id="xDtPBldXQ4NZo9oc1I2b1d" x1="14" x2="14" y1="9.833" y2="54.335" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#xDtPBldXQ4NZo9oc1I2b1d)" d="M10 39H18V41H10z"/><linearGradient id="xDtPBldXQ4NZo9oc1I2b1e" x1="39" x2="39" y1="22.833" y2="31.002" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#xDtPBldXQ4NZo9oc1I2b1e)" d="M43,30c0,0.552-0.448,1-1,1h-6c-0.552,0-1-0.448-1-1v-6c0-0.552,0.448-1,1-1h6 c0.552,0,1,0.448,1,1V30z"/></svg>
    ),
    imageAlign: 'top',
    title: 'Navigation Manager'
  },
  {
    content: (
      <p>
        Get has a simple and powerful dependency manager that allows you to retrieve the same class as your Bloc or Controller with just 1 lines of code.
      </p>
    ),
    image: (
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="96px" height="96px"><linearGradient id="G0xt5Jc3VFs2RO0nO8MMaa" x1="32" x2="32" y1="20.557" y2="35.614" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#G0xt5Jc3VFs2RO0nO8MMaa)" d="M50.905,21H13.095C12.49,21,12,21.49,12,22.095v10.809C12,33.51,12.49,34,13.095,34H25v-2	c0-1.105,0.895-2,2-2h10c1.105,0,2,0.895,2,2v2h11.905C51.51,34,52,33.51,52,32.905V22.095C52,21.49,51.51,21,50.905,21z"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMab" x1="32" x2="32" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#G0xt5Jc3VFs2RO0nO8MMab)" d="M53,9H11c-1.654,0-3,1.346-3,3v40c0,1.654,1.346,3,3,3h42c1.654,0,3-1.346,3-3V12 C56,10.346,54.654,9,53,9z M28.382,11l3,6h-4.764l-3-6H28.382z M10,12c0-0.552,0.448-1,1-1h10.382l3,6H10V12z M54,52 c0,0.552-0.448,1-1,1H11c-0.552,0-1-0.448-1-1v-1.184C10.314,50.928,10.647,51,11,51h42c0.353,0,0.686-0.072,1-0.184V52z M54,48 c0,0.552-0.448,1-1,1H11c-0.552,0-1-0.448-1-1V19h44V48z M54,17H33.618l-3-6H53c0.552,0,1,0.448,1,1V17z"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMac" x1="18" x2="18" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#G0xt5Jc3VFs2RO0nO8MMac)" d="M13,47h10c0.552,0,1-0.447,1-1v-9c0-0.553-0.448-1-1-1H13c-0.552,0-1,0.447-1,1v9 C12,46.553,12.448,47,13,47z M14,38h8v7h-8V38z"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMad" x1="28" x2="28" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><rect width="2" height="2" x="27" y="32" fill="url(#G0xt5Jc3VFs2RO0nO8MMad)"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMae" x1="32" x2="32" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><rect width="2" height="2" x="31" y="32" fill="url(#G0xt5Jc3VFs2RO0nO8MMae)"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMaf" x1="36" x2="36" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><rect width="2" height="2" x="35" y="32" fill="url(#G0xt5Jc3VFs2RO0nO8MMaf)"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMag" x1="32" x2="32" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#G0xt5Jc3VFs2RO0nO8MMag)" d="M27,47h10c0.552,0,1-0.447,1-1v-9c0-0.553-0.448-1-1-1H27c-0.552,0-1,0.447-1,1v9 C26,46.553,26.448,47,27,47z M28,38h8v7h-8V38z"/><linearGradient id="G0xt5Jc3VFs2RO0nO8MMah" x1="46" x2="46" y1="8.787" y2="54.617" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#G0xt5Jc3VFs2RO0nO8MMah)" d="M41,47h10c0.552,0,1-0.447,1-1v-9c0-0.553-0.448-1-1-1H41c-0.552,0-1,0.447-1,1v9 C40,46.553,40.448,47,41,47z M42,38h8v7h-8V38z"/></svg>
    ),
    imageAlign: 'top',
    title: 'Dependencies Manager'
  }
]

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout
      title={`${siteConfig.title} - A simple open source for Flutter Application.`}
      description="A predictable state container for JavaScript apps."
    >

      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('index')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className={classnames('container', styles.featureBlock)}>
              <div className="row">
                {features.map(({ image, title, content }, idx) => (
                  <div key={idx} className={classnames('col', styles.feature)}>
                    {image && (
                      <div className={`text--center ${styles.blockImage}`}>
                        {image}
                      </div>
                    )}
                    <h2 className={`text--center ${styles.featureTitle}`}>
                      {title}
                    </h2>
                    <div className={styles.featureContent}>{content}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
