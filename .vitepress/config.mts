import { defineConfig } from 'vitepress'
import { zh, search as zhSearch } from './zh'

export default defineConfig({
  srcDir: "docs",

  locales: {
    root: { label: "简体中文", ...zh }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/SkySummer/DevNotes' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: { ...zhSearch }
      }
    }
  }
})
