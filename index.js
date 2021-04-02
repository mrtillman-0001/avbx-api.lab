window.onload = function(){
  var client = new AvBxGravatarClient(token);
  
  client
  .getImages()
  .then(console.log)
  .catch(console.log);

}