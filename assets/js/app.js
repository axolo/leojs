/**
 * LeoJS      -- a AOP HTML Framework based on jQuery
 * @version   0.0.3
 * @author    Yueming Fang
 */
try {
  $.getScript('assets/js/global.js', function() {                                             // Load Global Script
    $('head').append('<link rel="stylesheet" href="' + app.page + '.css' + app.cache + '">')  // Load Component Style
    app.el.load(app.page + '.html' + app.cache)                                               // Load Component HTML
    $.getScript(app.page + '.js')                                                             // Load Component Script
  })
} catch(err) {
  console.log(err)
}
