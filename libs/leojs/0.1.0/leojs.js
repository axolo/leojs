var leojs = {
  page: window.location.hash.split('/')[1],
  base: window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/')),
  hash: '?_=' + (new Date()).getTime(),
  load: function(page) {
    if('undefined' === typeof jQuery) throw { error:'101', message: 'jQuery is required!' }
    if('undefined' === typeof page) { page = this.page || 'main' }
    var that = this
    var path = [this.base, 'pages', page, ].join('/') + '/'
    jQuery.getJSON(path + page + '.json', function(config) {                                            // load config
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
  run: function(page){
    try {
      // parse app.json
      // rbac, auth, preload, postload ...
      console.log('pre load')
      this.load(page)
      console.log('post load')
    } catch(e) {
      console.error(e)
    }
  }
}
