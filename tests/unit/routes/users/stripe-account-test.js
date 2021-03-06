import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | users/stripe account', function() {
  setupTest('route:users/stripe-account', {
    // Specify the other units that are required for this test.
    needs: ['service:session']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
