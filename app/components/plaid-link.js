import Ember from 'ember';
import { task } from 'ember-concurrency';

const { $, get } = Ember;

export default Ember.Component.extend({
  plaidHandler: null,
  successTask: null, /* passed in via handlebars closure action */

  didInsertElement() {
    get(this, 'loadScriptTask').perform();
  },

  loadScriptTask: task(function * () {
    $.ajaxSetup({
      cache: true
    });

    yield $.getScript('https://cdn.plaid.com/link/v2/stable/link-initialize.js');

    this.set('plaidHandler', this.plaidCreator());
  }),

  plaidCreator() {
    let self = this;
    return Plaid.create({
      apiVersion: 'v2',
      clientName: 'browntree labs',
      env: 'sandbox',
      product: 'auth',
      key: 'ad640367b8e222632e952b3b5acf51',
      onSuccess: (public_token, metadata) => {
        self.plaidLinkCallback(public_token, metadata);
      }
    });
  },

  plaidLinkCallback(public_token, metadata) {
    return get(this, 'success')(public_token, metadata);
  },

  actions: {
    clicked() {
      get(this, 'plaidHandler').open();
    }
  }
});
