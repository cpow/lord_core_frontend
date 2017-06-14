import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Route | tenant dashboard', function() {
  setupTest('route:tenant-dashboard', {
    needs: ['service:currentUser']
  });

  it('exists', function() {
    let route = this.subject();
    expect(route).to.be.ok;
  });
});
