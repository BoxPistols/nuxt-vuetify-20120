# nuxt-app-20120

> My spectacular Nuxt.js project

Open This Product:
https://boxpistols.github.io/nuxt-vuetify-20120/

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

----

# Deploy

$ npm install push-dir --save-dev

package.json
```json
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},
```

nuxt.config.js
```js
head: {
  title: pkg.name,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: pkg.description }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/<リポジトリ名>/favicon.ico' }
  ]
},

...

router: {
  base: '/<リポジトリ名>/'
},

```

Do commit

`$ yarn generate`

`$ yarn deploy`

---

### Git setting

branch is gh-pages
