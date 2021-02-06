module.exports = {
  title: "Thorn's Document",
  tagline: 'A simple open source for Flutter Application',
  url: 'https://chornthorn.github.io',
  baseUrl: '/docs/',
  favicon: 'img/favicon/Comupter.ico',
  organizationName: 'chornthorn',
  projectName: 'docs',
  themeConfig: {
    image: 'img/icons8-flutter.svg',
    metadatas: [{ name: 'twitter:card', content: 'summary' }],
    prism: {
      theme: require('./src/js/monokaiTheme.js')
    },
    colorMode: {
      disableSwitch: false
    },
    navbar: {
      title: "Thorn's Document",
      logo: {
        alt: 'Flutter Logo',
        src: 'img/icons8-google-code.svg'
      },
      items: [
        {
          label: 'Getting Started',
          to: 'introduction/getting-started',
          position: 'right'
        },
        {
          label: 'Tutorial',
          to: 'tutorials/flutter/essentials/part-1-overview-concepts',
          position: 'right'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/chornthorn',
          position: 'right'
        },
        {
          label: 'Need help?',
          to: 'introduction/getting-started#help-and-discussion',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'introduction/getting-started'
            },
            {
              label: 'Tutorial',
              to: 'tutorials/flutter/essentials/part-1-overview-concepts'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook Group',
              href: 'https://www.facebook.com/groups/266998017828595'
            },
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/flutter'
            },
            {
              label: 'Feedback',
              to: 'introduction/getting-started#help-and-discussion'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/chornthorn/docs'
            },
          ]
        }
      ],
      logo: {
        alt: 'Flutter Starter Dev Logo',
        src: 'img/icons8-google-code-bottom.svg',
        href: 'https://github.com/chornthorn/docs'
      },
      copyright: `Copyright © 2021–${new Date().getFullYear()} Bong Thorn documentation authors.`
    },
    algolia: {
      apiKey: '518c6e3c629811d8daa1d21dc8bcfa37',
      indexName: 'redux',
      algoliaOptions: {}
    },
    googleAnalytics: {
      trackingID: 'UA-160925128-1'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
