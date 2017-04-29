import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Controller | manager dashboard', function() {
  setupTest('controller:manager-dashboard', {
    // Specify the other units that are required for this test.
    needs: ['service:currentUser']
  });

  // Replace this with your real tests.
  it('exists', function() {
    let controller = this.subject();
    expect(controller).to.be.ok;
  });
});
