jQuery.support.cors = true

var route = undefined !== querystring.parse().page ? querystring.parse().page : 'index'

var app = {
  api:    '//localhost/api',
  el:     $('app'),
  route:  route,
  page:   ['pages', route, route].join('/'),
  routes: [
    { name: 'index',  title: '首页' },
    { name: 'demo',  title: '演示' },
    { name: 'admin',  title: '后台' },
    { name: 'form', title: '表单' }
  ]
}

var i = _.findIndex(app.routes, { name: route })

$('title').text(-1 === i ? 'untitled' : app.routes[i].title)
