import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | application', function() {
  setupTest('route:application', {
    // Specify the other units that are required for this test.
    needs: ['service:currentUser', 'service:session']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
