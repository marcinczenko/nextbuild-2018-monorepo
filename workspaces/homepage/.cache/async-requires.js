// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-markdown-template-js": () => import("/Users/mczenko/Desktop/nextbuild-2018/nextbuild-2018-monorepo/workspaces/homepage/src/templates/markdownTemplate.js" /* webpackChunkName: "component---src-templates-markdown-template-js" */),
  "component---cache-dev-404-page-js": () => import("/Users/mczenko/Desktop/nextbuild-2018/nextbuild-2018-monorepo/workspaces/homepage/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import("/Users/mczenko/Desktop/nextbuild-2018/nextbuild-2018-monorepo/workspaces/homepage/.cache/data.json")

