import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: "docs",
  title: "SkySummer Notes",
  description: "编程学习笔记",

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SkySummer/DevNotes' }
    ]
  }
})
