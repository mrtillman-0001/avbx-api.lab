class AvBxGravatarClient extends AvBxApiClient {
  constructor(token){
    super(token);
  }
  exists(){
    const url = this.baseUri + 'gravatar/exists';
    return fetch(url, {
      method: 'POST',
      headers: this.headers
    }).then(res => res.json());
  }
  addresses(){
    const url = this.baseUri + 'gravatar/addresses';
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    }).then(res => res.json());
  }
  getImages(){
    const url = this.baseUri + 'gravatar/images';
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    }).then(res => res.json());
  }
  setPrimaryImage(imageName){
    const url = this.baseUri + 'gravatar/' + imageName;
    return fetch(url, {
      method: 'PUT',
      headers: this.headers
    }).then(res => res.json());
  }
  removePrimaryImage(){
    const url = this.baseUri + 'gravatar';
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => res.json());
  }
  saveImageUrl(imageUrl){
    const url = this.baseUri + 'gravatar/images';
    const body = new FormData();
    body.append('imageUrl', imageUrl);
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body
    }).then(res => res.json());
  }
  saveImageData(imageData){
    const url = this.baseUri + 'gravatar/images';
    const body = new FormData();
    body.append('imageData', imageData);
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body
    }).then(res => res.json());
  }
  saveImageFile(imageFile){
    const url = this.baseUri + 'gravatar/images';
    const body = new FormData();
    body.append('image', imageFile);
    return fetch(url, {
      method: 'POST',
      headers: this.headers,
      body
    }).then(res => res.json());
  }
  deleteImage(imageName){
    const url = this.baseUri + 'gravatar/images/' + imageName;
    return fetch(url, {
      method: 'DELETE',
      headers: this.headers
    }).then(res => res.json());
  }
  deleteImages(...imageNames){
    const url = this.baseUri + 'gravatar/images';
    return fetch(url, {
      method: 'DELETE',
      headers: Object.assign({}, this.headers, { 'Content-Type': 'application/json' }),
      body: JSON.stringify({ imageNames })
    }).then(res => res.json());
  }
  test(){
    const url = this.baseUri + 'gravatar/test';
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    }).then(res => res.json());
  }  
}