//ES2015 - AJAX (will do ES6 later)
//Prototypes

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
// user will pass in url to library
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  // need the var to access "this" data in a function out of scope since this changes to the current scope
  let self = this;

  //this doesnt pass down to function, is a new this for the current function (different scope)
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make an HTTP POST Request

easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  // set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  // onload
  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request

easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);

  // set content type
  this.http.setRequestHeader('Content-type', 'application/json');

  // onload
  let self = this;

  this.http.onload = function() {
    callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request

easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  // need the var to access "this" data in a function out of scope since this changes to the current scope
  let self = this;

  //this doesnt pass down to function, is a new this for the current function (different scope)
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted!');
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}