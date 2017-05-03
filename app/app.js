var init = {
  auth: function(){
    console.log('init.auth()')
    if(window.location.hash === '#/login') { return true }
    return true
  }
}
