import Ember from 'ember';

const { Route, get,
  inject: { service },
  computed: { readOnly },
} = Ember;

export default Route.extend({
  currentUser: service(),
  user: readOnly('currentUser.user'),

  model() {
    return get(this, 'currentUser.user.stripeAccount');
  }
});
