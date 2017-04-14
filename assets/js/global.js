jQuery.support.cors = true

var route = undefined !== querystring.parse().page ? querystring.parse().page : 'index'

var app = {
  api:    '//localhost/api',
  el:     $('app'),
  route:  route,
  page:   ['pages', route, route].join('/'),
  routes: {
    index: { title: '首页' },
    admin: { title: '后台' },
    form:  { title: '表单' }
  }
}

$('title').text(app.routes[app.route].title)
