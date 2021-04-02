window.onload = function(){
  var client = new AvBxApiClient(token);
  
  client
  .getImages()
  .then(console.log)
  .catch(console.log)

}