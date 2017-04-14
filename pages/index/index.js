var tmpl = doT.template($('#tmpl').text())

$.ajax({
  url: 'pages/index/data.json',
  success: function(data) {
    $('#data').html(tmpl(data))
  }
})

$('#data').on('click', 'li', function(e){
  console.log($(this).text())
})