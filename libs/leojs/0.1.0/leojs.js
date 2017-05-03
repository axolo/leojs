// @TODO single recursive method parser: app.json -> main.json -> partial.json -> ...
// http://stackoverflow.com/questions/7083550/jquery-getscript

var app = {
  // @TODO #/route/:param
  page: window.location.hash.split('/')[1],
  base: window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/')),
  hash: '?_=' + (new Date()).getTime(),
  load: function(page) {
    if('undefined' === typeof jQuery) throw { error: '101', message: 'jQuery is required!' }
    if('undefined' === typeof page) { page = this.page || 'main' }
    var that = this
    var path = [this.base, 'pages', page, ].join('/') + '/'
    jQuery.getJSON(path + page + '.json' + this.hash, function(config) {                                // load config
      jQuery('head').append('<link rel="stylesheet" href="' + path + page + '.css' + that.hash + '">')  // load style
      jQuery(config.element || 'router').load(path + page + '.html' + that.hash)                        // load template
      jQuery.getScript(path + page + '.js')                                                             // load script
      if(Array.isArray(config.partials)) {                                                              // recursive
        for(partial in config.partials) {
          that.load(config.partials[partial])
        }
      }
    })
  },
  onClickRoute: function() {
    var that = this
    jQuery('a[rel="route"]').on('click', function(e){
      // window.location.reload()
      that.load(jQuery(this).prop('href').split('#/')[1])
    })
  },
  run: function(page){
    try {
      // parse app.json (rbac, auth, preload, postload ...)
      var that = this
      var path = [this.base, 'app'].join('/') + '/'
      jQuery.getJSON(path + 'app.json' + this.hash, function(config) {
        jQuery.getScript(path + 'app.js', function(res) {
          if('undefined' === typeof init || 'function' !== typeof init.auth || init.auth()){
            that.load(page)
            that.onClickRoute()
          }
        })
      })
    } catch(e) {
      console.error(e)
    }
  }
}
