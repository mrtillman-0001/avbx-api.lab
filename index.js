window.onload = function(){
  var client = new AvBxGravatarClient(token);
  var fileInput = document.getElementById('fileInput');
  
  client.deleteImage('3e6cc942c2b18108ef8a6dc5dc22999f');

  fileInput.addEventListener('change', uploadFile);

  function uploadFile(){
    const file = fileInput.files[0];
    client.saveImageFile(file)
    .then(console.log)
    .catch(console.log);
  }
  
  // client
  // .test()
  // //.deleteImages('c848d8bd65b960b315795f5d83887902', 'b441bd4fae0683fa92626a62db9798c5')
  // //.saveImageData('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=')
  // //.saveImageUrl('http://placehold.it/512')
  // .then(console.log)
  // .catch(console.log);

}