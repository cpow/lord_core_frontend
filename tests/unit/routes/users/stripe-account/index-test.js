import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | users/stripe account/index', function() {
  setupTest('route:users/stripe-account/index', {
    needs: ['service:currentUser']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
