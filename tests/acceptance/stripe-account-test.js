import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'lord-core-frontend/tests/helpers/start-app';
import destroyApp from 'lord-core-frontend/tests/helpers/destroy-app';
import { authenticateSession } from 'lord-core-frontend/tests/helpers/ember-simple-auth';
import managerPage from 'lord-core-frontend/tests/pages/manager-dashboard';
import tenantPage from 'lord-core-frontend/tests/pages/tenant-dashboard';

describe('Acceptance | stripe account', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('manager can see a link to create a stripe account', function(){
    let user = server.create('user', {role: 'manager'});
    authenticateSession(application, {token: user.id});
    managerPage.visit();

    andThen(() => {
      expect(currentURL()).to.equal('/manager-dashboard');
      expect(managerPage.showingNewStripeAccountLink).to.be.true
    });
  });

  it('manager can click link for new stripe account', function() {
    let user = server.create('user', {role: 'manager'});
    authenticateSession(application, {token: user.id});
    managerPage.visit();
    managerPage.clickNewStripeAccount();

    andThen(() => {
      expect(currentURL()).to.equal(`/users/${user.id}/stripe-account/new`);
    });
  });

  it('tenant can click on the new stripe account', function() {
    let user = server.create('user', {role: 'tenant'});
    authenticateSession(application, {token: user.id});
    tenantPage.visit();
    tenantPage.clickNewStripeAccount();

    andThen(() => {
      expect(currentURL()).to.equal(`/users/${user.id}/stripe-account/new`);
    });
  });
});
