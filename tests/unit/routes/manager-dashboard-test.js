import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | manager dashboard', function() {
  setupTest('route:manager-dashboard', {
    // Specify the other units that are required for this test.
    needs: ['service:currentUser']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
