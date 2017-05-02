$('form').on('click', 'button', function(e){


  var data = new FormData()

  // form
  data.append('text', $('input[name="text"]').val())
  data.append('password', $('input[name="password"]').val())
  $('input[type="checkbox"]:checked').each(function(){
    data.append('checkbox[]', $(this).val())
  })
  data.append('radio', $('input[type="radio"]:checked').val())
  data.append('select', $('select[name="select"]').val())
  $('select[multiple="multiple"] option:selected').each(function(){
    data.append('combo[]', $(this).val())
  })
  data.append('textarea', $('textarea').val())
  // file
  $.each($('input[type="file"]')[0].files, function(i, file) {
      data.append('file[]', file)
  })


  // submit
  $.ajax({
    url: app.base + '/data/form.php',
    type: 'POST',
    data: data,
    contentType: false,
    cache: false,
    processData: false,
    success: function(data){
        console.log(data)
    }
  })

})
