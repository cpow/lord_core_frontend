import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get,
  inject: { service },
  computed: { readOnly },
} = Ember;

export default Controller.extend({
  currentUser: service(),
  user: readOnly('currentUser.user'),

  createStripeAccountTask: task(function * (public_token, metadata) {
    let userId = get(this, 'user.id');
    let accountId = metadata.account_id;
    return yield get(this, 'store').createRecord('stripeAccount', {
      userId: userId,
      accountId: accountId,
      publicToken: public_token
    }).save();
  }),

  actions: {
    success(public_token, metadata) {
      get(this, 'createStripeAccountTask').perform(public_token, metadata);
      return this.transitionToRoute('application');
    }
  }
});
