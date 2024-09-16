export const pathKey = {
  root: '/',
  login() {
    return pathKey.root.concat('login/')
  },
  register() {
    return pathKey.root.concat('register/')
  },
  settings() {
    return pathKey.root.concat('settings/')
  },
  home() {
    return pathKey.root
  },
  page404() {
    return pathKey.root.concat('404/')
  },
  article: {
    root() {
      return pathKey.root.concat('article/')
    },
    bySlug({ slug }) {
      return pathKey.article.root().concat(slug, '/')
    },
  },
  profile: {
    root() {
      return pathKey.root.concat('profile/')
    },
    byUsername({ username }) {
      return pathKey.profile.root().concat(username, '/')
    },
    byUsernameFavorites({ username }) {
      return pathKey.profile.byUsername({ username }).concat('favorites/')
    },
  },
  editor: {
    root() {
      return pathKey.root.concat('editor/')
    },
    bySlug({ slug }) {
      return pathKey.editor.root().concat(slug, '/')
    },
  },
}
