import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get,
  inject: { service },
  computed: { readOnly },
} = Ember;

export default Controller.extend({
  currentUser: service(),
  user: readOnly('currentUser.user'),

  createStripeAccountTask: task(function * () {
    let userId = get(this, 'user.id');
    return yield get(this, 'store').createRecord('stripeAccount', {
      userId: userId,
    }).save();
  }),

  actions: {
    success(/*public_token, metadata*/) {
      get(this, 'createStripeAccountTask').perform();
      return this.transitionToRoute('application');
    }
  }
});
