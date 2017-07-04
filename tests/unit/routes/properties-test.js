import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | properties', function() {
  setupTest('route:properties', {
    // Specify the other units that are required for this test.
    needs: ['service:session', 'service:currentUser']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
