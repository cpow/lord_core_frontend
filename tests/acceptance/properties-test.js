import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import startApp from 'lord-core-frontend/tests/helpers/start-app';
import destroyApp from 'lord-core-frontend/tests/helpers/destroy-app';
import { authenticateSession } from 'lord-core-frontend/tests/helpers/ember-simple-auth';
import managerPage from 'lord-core-frontend/tests/pages/manager-dashboard';
import propertiesPage from 'lord-core-frontend/tests/pages/property-index';

describe('Acceptance | properties', function() {
  let application;

  beforeEach(function() {
    application = startApp();
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('manager can see a link to properties', function(){
    let user = server.create('user', {role: 'manager'});
    authenticateSession(application, {token: user.id});
    managerPage.visit();

    andThen(() => {
      expect(currentURL()).to.equal('/manager-dashboard');
      expect(managerPage.showingPropertiesLink).to.be.true
    });
  });

  it('will show properties for a company', function() {
    let user = server.create('user', {role: 'manager'});
    let properties = server.createList('property', 2, {company: user.company});
    authenticateSession(application, {token: user.id});

    managerPage.visit();
    propertiesPage.visit();

    andThen(() => {
      expect(currentURL()).to.equal(`/properties`);
      expect(propertiesPage.properties(0).name).to.eq(properties[0].name);
    });
  });
});
