import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

describe('Acceptance | login', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /login', function() {
    visit('/login');

    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('can post to login', function() {
    let user = server.create('user', {
      email: 'user@example.com',
      password: 'test1234',
      role: 'tenant'
    });

    visit('/login');

    andThen(() => {
      expect(currentURL()).to.equal('/login');
    });

    fillIn('input[type="email"]', user.email);
    fillIn('input[type="password"]', user.password);
    click('button[type=submit]');

    wait().andThen(() => {
      expect(currentURL()).to.equal('/');
    });
  });
});
