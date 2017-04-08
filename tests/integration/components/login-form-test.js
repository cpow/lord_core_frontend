import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/start-mirage';

describe('Integration | Component | login form', function() {
  setupComponentTest('login-form', {
    integration: true
  });
  it('renders', function() {
    startMirage(this.container);
    let model = server.create('user');
    this.set('user', model);

    this.on('completeLogin', function() {return true;});

    this.render(hbs`
      {{login-form
          model=user
          onLogin=(action 'completeLogin')}}
    `);
    expect(this.$()).to.have.length(1);
  });
});
