/**
 * 查看以下文档了解主题配置
 * - @see https://theme-plume.vuejs.press/config/intro/ 配置说明
 * - @see https://theme-plume.vuejs.press/config/theme/ 主题配置项
 *
 * 请注意，对此文件的修改都会重启 vuepress 服务。
 * 部分配置项的更新没有必要重启 vuepress 服务，建议请在 `.vuepress/plume.config.ts` 文件中配置
 *
 * 特别的，请不要在两个配置文件中重复配置相同的项，当前文件的配置项会被覆盖
 */

import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: "/",
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'TONX',
      lang: 'zh-CN',
      description: "应不少玩家的要求，TOHE 将保持最基本的适配，并与 TOH 同步更新，以保证有需要的玩家仍然可以正常玩。 顺带一提，TOHE 已更名为 TONX。",
    },
    '/en/': {
      title: 'TONX',
      lang: 'en-US',
      description: 'At the request of many players, TOHE will maintain the most basic adaptation and synchronize updates with TOH to ensure that players in need can still play normally. By the way, TOHE has renamed TONX.',
    },
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  bundler: viteBundler(),
  shouldPrefetch: true,
  theme: plumeTheme({
    markdown: {
      alert: false, // 统一使用提示容器
      image: {
        figure: true,
        lazyload: true,
        mark: true,
        size: true,
      },
      math: false,
      include: false,
      mark: "lazy",
      // codeTabs: false,
      plot: false,
      fileTree: false
    },
    codeHighlighter: {
      twoslash: false,
      whitespace: true,
      lineNumbers: false,
    },
    readingTime: false,
    hostname: 'https://tonx.cc',
    autoFrontmatter: false,
    cache: "filesystem",
    docsRepo: 'TownOfNext/TONX-Doc-Source',
    docsBranch: 'main',
    docsDir: "src",
    editLink: true,
    lastUpdated: { formatOptions: { dateStyle: 'short', timeStyle: 'short' } },
    changelog: false,
    contributors: true
  }),
})
