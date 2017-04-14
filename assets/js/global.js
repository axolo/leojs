jQuery.support.cors = true

var _API = 'http://localhost:8000/hkled/beta/api/index.php'

var _ROUTES = {
  index: { title: '首页' },
  admin: { title: '后台' },
  form:  { title: '表单' },
  sfctc: { title: '计件' }
}

var request = querystring.parse()
var route   = request.page || 'index'
var page    = './pages/' + route + '/' + route
var appEl = $('app')

$('title').text(_ROUTES[route].title)
