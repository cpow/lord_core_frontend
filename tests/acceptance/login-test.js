import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import page from '../pages/login-form';

describe('Acceptance | login', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /login', function() {
    page.visit();

    return andThen(() => {
      expect(currentURL()).to.equal('/login');
    });
  });

  it('will redirect to manager dashboard as manager', function() {
    let company = server.create('company')
    let user = server.create('user', {
      email: 'user@example.com',
      password: 'test1234',
      role: 'manager',
      company: company
    });

    page.visit();

    andThen(() => {
      expect(currentURL()).to.equal('/login');
    });

    page
      .email(user.email)
      .password(user.password)
      .submit();

    wait().andThen(() => {
      expect(currentURL()).to.equal(`/${user.role}-dashboard`);
    });
  });

  it('will redirect to tenant dashboard as tenant', function() {
    let user = server.create('user', {
      email: 'user@example.com',
      password: 'test1234',
      role: 'tenant'
    });

    page.visit();

    andThen(() => {
      expect(currentURL()).to.equal('/login');
    });

    page
      .email(user.email)
      .password(user.password)
      .submit();

    wait().andThen(() => {
      expect(currentURL()).to.equal(`/${user.role}-dashboard`);
    });
  });

  it('will show errors when the login failed', function() {
    page
      .visit()
      .email('fail@fail.com')
      .password('hello')
      .submit();

    andThen(() =>{
      expect(page.error).to.eq('bad creds');
    });
  });
});
