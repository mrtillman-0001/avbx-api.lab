window.onload = function(){
  var url = 'https://api.avatarbox.io/rest.v1/gravatar/images'

  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`	
    }
  })
  .then(res => res.json())
  .then(console.log)
  .catch(console.log)
}