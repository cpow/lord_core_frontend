import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';


describe('Integration | Component | properties/property-form', function() {
  setupComponentTest('properties/property-form', {
    integration: true
  });

  it('renders', function() {
    this.set('submitSpy', sinon.spy());
    this.set('cancelSpy', sinon.spy());

    this.render(hbs`{{properties/property-form
      onSubmit=(action submitSpy)
      onCancel=(action cancelSpy)}}`);

    expect(this.$()).to.have.length(1);
  });
});
