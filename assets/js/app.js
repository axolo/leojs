/**
 * LeoJS      -- a AOP HTML Framework based on jQuery
 * @version   0.0.1
 * @author    Yueming Fang
 */
try {
  $.getScript('assets/js/global.js?' + Math.random(), function() {        // Load Global Script (App config ...)
    $.ajax({
      url: app.page + '.html?' + Math.random(),                           // Load Component HTML
      success: function(res) {
        $('head').append('<link rel="stylesheet" href="'                  // Load Component Style
          + app.page + '.css?' + Math.random() + '">')
        app.el.html(res)                                                  // Filled Component Element
        $.getScript(app.page + '.js?' + Math.random(), function() {       // Load Component Script
        })
      },
      error: function(err) {
        throw err
      }
    })
  })
} catch(err) {
  console.log(err)
}
