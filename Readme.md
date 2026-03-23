# Town Of Next Docs

## 快速开始

确保你的开发环境已安装 [Node.js](https://nodejs.org/) 与 [npm](https://www.npmjs.com/)。\
主题要求您的 Node.js 版本 >= 20.19.0 && < 21.0.0 || >= 22.0.0，您的 npm 版本 >= 8。通常您应当使用 22+ 的 LTS 版本 Node.js，最新稳定版本的 npm。

安装依赖：

```sh
npm i
```

使用：

```sh
# 启动开发服务
npm run docs:dev
# 构建生产包
npm run docs:build
# 本地预览生产服务
npm run docs:preview
# 更新 vuepress 和主题
npx vp-update # 或 npm run vp-update
```

## 部署到 GitHub Pages

主题已创建 github actions: `.github/workflows/docs-deploy.yml`，你还需要在 github 仓库中进行以下设置：

- [ ] `settings > Actions > General`，拉到页面底部，在 `Workflow permissions` 下，勾选 `Read and write permissions`，并点击保存按钮
- [ ] `settings > Pages`, 在 `Build and deployment` 中，`Source` 选择 `Deploy from a branch`, `Branch` 选择 `gh-pages`，并点击保存按钮
  (首次创建可能没有 `gh-pages`分支，你可以先完成上面的设置后，推送一次代码到主分支，等待 `github actions` 完成后再进行设置)
- [ ] 修改 `src/.vuepress/config.ts` 中的 `base` 选项：
  - 如果你准备发布到 `https://<USERNAME>.github.io/` ，你可以省略这一步，因为 `base` 默认就是 `"/"` 。
  - 如果你准备发布到 `https://<USERNAME>.github.io/<REPO>/` ，也就是说你的仓库地址是 `https://github.com/<USERNAME>/<REPO>` ，则将 `base` 设置为 `"/<REPO>/"`。

如需要自定义域名，请查看 [Github Pages 文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 文档

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)

