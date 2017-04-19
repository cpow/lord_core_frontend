import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get } = Ember;

export default Controller.extend({
  successTask: task(function * (public_token, metadata) {
    //this is where the call to API goes to create a users plaid account
    debugger;
  }),

  actions: {
    success(public_token, metadata) {
      get(this, 'successTask').perform(public_token, metadata);
    }
  }
});
