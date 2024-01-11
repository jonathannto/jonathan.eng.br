export default defineAppConfig({
  alpine: {
    title: 'Jonathan Nascimento',
    description: 'Meu site',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'right', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo-jou.png', // path of the logo
        pathDark: '/logo-jou-dark.png', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Jonathan Nascimento' // alt of the logo
      }
    },
    footer: {
      credits: {
        enabled: true, // possible value are : true | false
        repository: 'https://www.github.com/nuxt-themes/alpine' // our github repository
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Minhas redes sociais' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      x: {
        icon: 'pajamas:x',
        label: 'X (Ex-twitter)',
        href:'https://twitter.com/jonathanNto'
      },
      threads: {
        icon: 'bi:threads',
        label: 'Threads',
        href:'https://www.threads.net/@jonathan.nto'
      },
      instagram: 'jonathan.nto',
      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/jonathan-nto/'
      },
      youtube: '@jonathannto',
      github: 'jonathannto',
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})
