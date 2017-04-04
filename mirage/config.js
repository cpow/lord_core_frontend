import Mirage from 'ember-cli-mirage';

export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '/api/v1';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */

  this.post('/login', function({ users }, request) {
    let {email, password} = JSON.parse(request.requestBody);
    let user = users.findBy({email, password});

    if (user) {
      return {token: user.id};
    } else {
      let headers = { 'Accept': 'application/vnd.api+json', 'Content-Type': 'application/vnd.api+json' };
      let body = { errors: [{ detail: 'Email or password is invalid' }] };

      return new Mirage.Response(400, headers, body);
    }
  });
}