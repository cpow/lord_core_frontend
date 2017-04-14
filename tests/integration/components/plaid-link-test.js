import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | plaid link', function() {
  setupComponentTest('plaid-link', {
    integration: true
  });
  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#plaid-link}}
    //     template content
    //   {{/plaid-link}}
    // `);

    this.render(hbs`{{plaid-link}}`);
    expect(this.$()).to.have.length(1);
  });
});
