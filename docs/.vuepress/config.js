import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // 👇 IMPORTANT: replace with your actual repo name (no <>)
  base: '/my-portfolio1/',

  title: 'Brwa Portfolio',
  description: 'Welcome to my personal portfolio built with VuePress',

  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Projects', link: '/projects/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Contact', link: '/contact/' },
    ],
    sidebar: {
      '/': ['/',],
      '/about/': ['/about/'],
      '/projects/': ['/projects/'],
      '/skills/': ['/skills/'],
      '/contact/': ['/contact/'],
    },
  }),

  bundler: viteBundler(),
})
