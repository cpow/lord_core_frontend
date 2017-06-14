import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import sinon from 'sinon';
// import page from '../pages/plaid-link';

const { set, get } = Ember;

describe('Integration | Component | plaid link', function() {
  setupComponentTest('plaid-link', {
    integration: true
  });
  it('renders', function() {
    this.render(hbs`{{plaid-link}}`);
    expect(this.$()).to.have.length(1);
  });

  it('will load ajax and grab plaid link init when entered', function(){
    set(this, 'loadScriptTask', sinon.spy());
    this.render(hbs`{{plaid-link}}`);
    expect(get(this, 'loadScriptTask')).to.have.been.calledOnce;
  });
});
