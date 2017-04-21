var tmpl = doT.template($('#tmpl').text())

$.ajax({
  url: 'pages/demo/data.json',
  success: function(data) {
    $('#data').html(tmpl(data))
  }
})

$('#data').on('click', 'li', function(e) {
  $(this).toggleClass('click')
  $(this).children('span').toggle()
})
