/**
 * @see https://theme-plume.vuejs.press/config/navigation/
 *
 * Navbar 配置文件。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' }
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' }
])

