// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-markdown-template-js": preferDefault(require("/Users/mczenko/Desktop/nextbuild-2018/nextbuild-2018-monorepo/workspaces/homepage/src/templates/markdownTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/mczenko/Desktop/nextbuild-2018/nextbuild-2018-monorepo/workspaces/homepage/.cache/dev-404-page.js"))
}

