var leojs = {
  page: window.location.hash.split('/')[1],
  base: window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/')),
  hash: '?_=' + (new Date()).getTime(),
  load: function(page) {
    try {
      if('undefined' === typeof jQuery) throw { error:'101', message: 'jQuery is required!' }
      if('undefined' === typeof page) { page = this.page || 'main' }
      var that = this
      var path = [this.base, 'pages', page, ].join('/') + '/'
      jQuery.getJSON(path + page + '.json' + this.hash, function(config) {                                            // load config
        jQuery('head').append('<link rel="stylesheet" href="' + path + page + '.css' + that.hash + '">')  // load style
        jQuery(config.element || 'router').load(path + page + '.html' + that.hash)                        // load template
        jQuery.getScript(path + page + '.js')                                                             // load script
        if(Array.isArray(config.partials)) {                                                              // recursive
          for(partial in config.partials) {
            that.load(config.partials[partial])
          }
        }
      })
    } catch(e) {
      console.error(e)
    }
  },
  onClickRoute: function() {
    jQuery('a[rel="route"]').on('click', function(e){
      // window.location.href += (jQuery(this).prop('href'))
      window.location.reload()
    })
  },
  run: function(page){
    try {
      // @TODO parse app.json
      // rbac, auth, preload, postload ...
      console.log('pre load')
      this.load(page)
      console.log('post load')
      this.onClickRoute()
    } catch(e) {
      console.error(e)
    }
  }
}
