import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';

describe('Unit | Adapter | application', function(){
  setupTest('adapter:application', {
    needs: ['service:session']
  });

  it('it exists', function() {
    let adapter = this.subject();
    expect(adapter).to.be.ok;
  });
});
