// require Lodash, jQuery, querystring

// config (require)
var config = {
  el:  $('app'),
  api: '../api',
  route: undefined !== querystring.parse().page ? querystring.parse().page : 'index',
  env: 'development',
  routes: [
    { name: 'index',  title: '首页' },
    { name: 'demo',  title: '演示' },
    { name: 'admin',  title: '后台' },
    { name: 'form', title: '表单' }
  ]
}

// pre load
jQuery.support.cors = true

// app (exports)
var app = {
  config: config,
  el: this.config.el,                                                 // root element
  cache: 'development' === this.config.env ? '?_=' + _.now() : '',    // browser cached
  page: ['pages', this.config.route, this.config.route].join('/'),    // current page dir
  route: this.config.route,                                           // current route
  api: this.config.api,                                               // api (optional)
  routes: this.config.routes                                          // routes (optional)
}

// post load
var i = _.findIndex(app.routes, { name: app.route })
$('title').text(-1 === i ? 'untitled' : app.routes[i].title)
