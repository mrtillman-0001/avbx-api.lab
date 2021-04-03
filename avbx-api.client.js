class AvBxApiClient {
  constructor(token){
    this.headers = {
      'Authorization': `Bearer ${token}`	
    };
    this.baseUri = 'https://api.avatarbox.io/rest.v1/';
    //this.baseUri = 'http://localhost:8081/';
  }
  get isActive(){
    return _get.call(this, 'isactive');
  }
  set isActive(value){
    return value ? this.on() : this.off();
  }
  on(){
    return _toggle.call(this, 'on');
  }
  off(){
    return _toggle.call(this, 'off');
  }
  collect(){
    return _get.call(this, 'collect');
  }
  dig(){
    return _get.call(this, 'dig');
  }
  peek(){
    return _get.call(this, 'peek');
  }
}

function _get(reource){
  const url = this.baseUri + reource;
  return fetch(url, {
    method: 'GET',
    headers: this.headers
  }).then(res => res.json());
}

function _toggle(state){
  return fetch(this.baseUri + state, {
    method: 'POST',
    headers: this.headers
  }).then(res => res.ok);
}