$.ajax({
  url: app.base + '/README.md' + app.hash,
  success: function(md) {
    $.getScript('https://cdn.bootcss.com/marked/0.3.6/marked.min.js', function(){
      $('#readme').html(marked(md))
    })
  }
})
