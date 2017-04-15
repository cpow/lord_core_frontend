import Ember from 'ember';
import { task } from 'ember-concurrency';

const { $ } = Ember;

export default Ember.Component.extend({
  plaidHandler: null,

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
    "use strict";
    return this.attrs.successTask.perform(public_token, metadata);
  },

  loadScriptTask: task(function * () {
    $.ajaxSetup({
      cache: true
    });

    yield $.getScript('https://cdn.plaid.com/link/v2/stable/link-initialize.js');

    this.set('plaidHandler', this.plaidCreator());
  }),

  didInsertElement() {
    this.get('loadScriptTask').perform();

  },

  actions: {
    clicked() {
      this.get('plaidHandler').open();
    }
  }
});
