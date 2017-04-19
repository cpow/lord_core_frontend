import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get } = Ember;

export default Controller.extend({
  successTask: task(function * (public_token, metadata) {
  }),

  actions: {
    success(public_token, metadata) {
      get(this, 'successTask').perform(public_token, metadata);
    }
  }
});
