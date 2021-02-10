module.exports = {
  title: "Flutter GetX",
  tagline: 'Fast, Stable, Extra-light and Powerful Flutter Framework!',
  url: 'https://chornthorn.github.io',
  baseUrl: '/getx-docs/',
  favicon: 'img/favicon/Comupter.ico',
  organizationName: 'chornthorn',
  projectName: 'getx-docs',
  themeConfig: {
    image: 'img/icons8-flutter.svg',
    metadatas: [{ name: 'twitter:card', content: 'summary' }],
    prism: {
      // theme: require('./src/js/monokaiTheme.js')
      theme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      disableSwitch: false
    },
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
          '⭐️ If you like This Document, give it a star on GitHub! ⭐️',
      backgroundColor: '#ffffff', // Defaults to `#fff`.
      textColor: '#000000', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: "Flutter GetX",
      logo: {
        alt: 'GetX Logo',
        src: 'img/icons8-google-code.svg'
      },
      items: [
        {
          label: 'Getting Started',
          to: 'index',
          position: 'right'
        },
        {
          label: 'Tutorial',
          to: 'index',
          position: 'right'
        },
        {
          label: 'Blog',
          to: 'blog/index',
          position: 'right'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/chornthorn/getx-docs',
          position: 'right'
        },
        {
          label: 'Need help?',
          href: 'https://github.com/chornthorn/getx-docs',
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
              to: 'index'
            },
            {
              label: 'Tutorial',
              to: 'index'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook Group',
              href: 'http://stackoverflow.com/questions/tagged/flutter'
            },
            {
              label: 'Stack Overflow',
              href: 'http://stackoverflow.com/questions/tagged/flutter'
            },
            {
              label: 'Feedback',
              href: 'http://stackoverflow.com/questions/tagged/flutter'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/chornthorn/docs'
            }
          ]
        }
      ],
      logo: {
        alt: 'Flutter Starter Dev Logo',
        src: 'img/icons8-google-code-bottom.svg',
        href: 'https://github.com/chornthorn/docs'
      },
      copyright: `Copyright © 2021–${new Date().getFullYear()} GetX documentation authors.`
    },
    algolia: {
      apiKey: 'c69d75c054317c41a123ab6315f31e0f',
      indexName: 'dev_flutter_starter_dev',
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
          path: 'docs',
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
