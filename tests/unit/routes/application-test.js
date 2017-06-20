import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

let mockWindow = function(pathname) {
  return { location: { pathname: pathname } }
};

let mockSession = function() {
  return {store: {}}
};

let mockCurrentUser = function(userObj) {
  return {user: userObj}
};

describe('Unit | Route | application', function() {
  setupTest('route:application', {
    // Specify the other units that are required for this test.
    needs: ['service:currentUser', 'service:session']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });

  it('will redirect a user if they request a different URL', function(){
    let route = this.subject();

    route.window = mockWindow('booberries');

    route.session = mockSession();
    route.setInitialURLInSession();
    expect(route.get('session.store.initialURL')).to.eq('booberries');
    expect(route.routeFromRoleOrInitialURL()).to.eq('booberries');
  });

  it('will redirect to a user\'s role dashboard if no initial URL', function(){
    let route = this.subject();
    route.currentUser = mockCurrentUser({role: 'tenant'});

    route.window = mockWindow('/');

    route.session = mockSession();
    route.setInitialURLInSession();
    expect(route.get('session.store.initialURL')).to.eq(null);
    expect(route.routeFromRoleOrInitialURL()).to.eq('tenant-dashboard');
  });
});
