// @TODO #/route/:param

var app = {
  hash: '?_=' + (new Date()).getTime(),
  base: window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/')),
  page: window.location.hash.split('/')[1],
  path: undefined,
  config: { app: undefined, page: undefined },
  load: function(page){
    var that = this
    undefined === page && (page = this.page || 'main')
    this.page = page
    this.path = [this.base, 'pages', page, ''].join('/')
    $.getJSON([this.path, this.page, '.json', this.hash].join(''), function(config){
      that.config.page = config
      jQuery('head').append(['<link rel="stylesheet" href="', that.path, that.page, '.css', that.hash, '">'].join(''))
      jQuery(config.element || 'router').load([that.path, that.page, '.html', that.hash].join(''))
      jQuery.getScript([that.path, that.page, '.js'].join(''))
      if(Array.isArray(config.partials)) {
        for(partial in config.partials) {
          that.load(config.partials[partial])
        }
      }
    })
  },
  listen: function(event, element, prop) {
    var that = this
    jQuery(document).on(event || 'click', element || 'a[rel="route"]' , function(e) {
      that.load(jQuery(this).prop(prop || 'href').split('#/')[1])
    })
  },
  run: function(config) {
    try {
      var that = this
      var path = [this.base, 'app', ''].join('/')
      undefined === config && (config = [path, 'app.json'].join(''))
      $.getJSON(config, function(config) {
        that.config.app = config
        jQuery.getScript(path + 'app.js', function(res) {
          if('undefined' === typeof init || 'function' !== typeof init.auth || init.auth()){
            that.load()
            that.listen()
          }
        })
      })
    } catch(e) {
      console.error(e)
    } finally {
      // console.log(this)
    }
  }
}
