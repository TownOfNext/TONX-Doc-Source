/**
 * @see https://theme-plume.vuejs.press/config/navigation/
 *
 * Navbar 配置文件。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: "模组介绍", link: "/docs/features" },
  { text: "下载安装", link: "/docs/getting-started" },
  { text: "进阶教程", link: "/docs/advanced" },
  { text: "职业列表", link: "/docs/roles" },
  { text: "常见问题", link: "/docs/faq" },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: "About", link: "/en/docs/features" },
  { text: "Installation", link: "/en/docs/getting-started" },
  { text: "Advanced", link: "/en/docs/advanced" },
  { text: "Roles", link: "/en/docs/roles" },
  { text: "FAQ", link: "/en/docs/faq" },
])

