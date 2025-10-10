export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/my-portfolio1/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"👋 Welcome to Brwa Hawar's Portfolio"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/my-portfolio1/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"About Me"} }],
  ["/contact/", { loader: () => import(/* webpackChunkName: "contact_index.html" */"C:/my-portfolio1/docs/.vuepress/.temp/pages/contact/index.html.js"), meta: {"title":"Contact Me"} }],
  ["/projects/", { loader: () => import(/* webpackChunkName: "projects_index.html" */"C:/my-portfolio1/docs/.vuepress/.temp/pages/projects/index.html.js"), meta: {"title":"My Projects"} }],
  ["/skills/", { loader: () => import(/* webpackChunkName: "skills_index.html" */"C:/my-portfolio1/docs/.vuepress/.temp/pages/skills/index.html.js"), meta: {"title":"Skills"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/my-portfolio1/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
