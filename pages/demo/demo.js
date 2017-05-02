var tmpl = doT.template($('#tmpl').text())

$.ajax({
  url: app.base + '/data/data.json' + app.hash,
  success: function(data) {
    $('#data').html(tmpl(data))
  }
})

$('#data').on('click', 'li', function(e) {
  $(this).toggleClass('click')
  $(this).children('span').toggle()
})
