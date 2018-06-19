import React from 'react'
import Helmet from 'react-helmet'

// import favicon from '../../assets/images/favicon.ico'

const Head = (props) => {
  return (
    <div>
      <style>
        {'@-ms-viewport { width: device-width; }'}
      </style>
      <Helmet
        meta={[
          { property: 'og:site_name', content: process.env.SITENAME },
          { name: 'twitter:site', content: `@${process.env.TWITTER}` },
          { name: 'google-site-verification',
            content: '5deyORP0Li8BwxR57BPSdEKNWQVkejO_pFt_prXmvgI'
          },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]}
        link={[
          { rel: 'icon', href: favicon }
        ]}
      />
    </div>
  )
}

export default Head
