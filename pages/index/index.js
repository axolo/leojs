var tmpl = doT.template($('#tmpl').text())
$('#index').html(tmpl(app.routes))
