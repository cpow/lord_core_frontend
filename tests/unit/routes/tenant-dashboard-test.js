import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | tenant dashboard', function() {
  setupTest('route:tenant-dashboard', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
