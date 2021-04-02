class AvBxApiClient {
  constructor(token){
    this.headers = {
      'Authorization': `Bearer ${token}`	
    };
    this.baseUri = 'https://api.avatarbox.io/rest.v1/';
  }
  getImages(){
    const url = this.baseUri + 'gravatar/images';
    return fetch(url, {
      method: 'GET',
      headers: this.headers
    }).then(res => res.json());
  }
}