import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | properties/property-form', function() {
  setupComponentTest('properties/property-form', {
    integration: true
  });
  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#properties/property-form}}
    //     template content
    //   {{/properties/property-form}}
    // `);

    this.render(hbs`{{properties/property-form}}`);
    expect(this.$()).to.have.length(1);
  });
});
