import Ember from 'ember';
import { task } from 'ember-concurrency';

const { $ } = Ember;

export default Ember.Component.extend({
  plaidHandler: null,

  plaidCreator: function() {
    return Plaid.create({
      apiVersion: 'v2',
      clientName: 'browntree labs',
      env: 'sandbox',
      product: 'auth',
      key: 'ad640367b8e222632e952b3b5acf51',
      onSuccess: function(public_token, metadata) {
        this.get('onSuccessTask').perform();
      }
    });
  },

  onSuccessTask: task(function * () {
    debugger;
  }),

  loadScriptTask: task(function * () {
      $.ajaxSetup({
        cache: true
      });

      yield $.getScript('https://cdn.plaid.com/link/v2/stable/link-initialize.js');

      this.set('plaidHandler', this.get('plaidCreator')());
  }),

  didInsertElement: function() {
    this.get('loadScriptTask').perform();

  },

  actions: {
    clicked() {
      this.get('plaidHandler').open();
    }
  }
});
