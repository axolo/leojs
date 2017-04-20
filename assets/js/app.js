/**
 * LeoJS      -- a AOP HTML Framework based on jQuery
 * @version   0.0.2
 * @author    Yueming Fang
 */
try {
  $.getScript('assets/js/global.js', function() {                               // Load Global Script
    $('head').append('<link rel="stylesheet" href="' + app.page + '.css">')     // Load Component Style
    app.el.load(app.page + '.html')                                             // Load Component HTML
    $.getScript(app.page + '.js')                                               // Load Component Script
  })
} catch(err) {
  console.log(err)
}
