import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import sinon from 'sinon';
import Ember from 'ember';

const { set } = Ember;

describe('Integration | Component | properties/property-form', function() {
  setupComponentTest('properties/property-form', {
    integration: true
  });

  it('renders', function() {
    set(this, 'submitSpy', sinon.spy());
    set(this, 'cancelSpy', sinon.spy());

    this.render(hbs`{{properties/property-form
      onSubmit=(action submitSpy)
      onCancel=(action cancelSpy)}}`);

    expect(this.$()).to.have.length(1);
  });
});
