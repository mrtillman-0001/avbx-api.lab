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
  test(){
    const url = this.baseUri + 'gravatar/test';
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    }).then(res => res.json());
  }  
}