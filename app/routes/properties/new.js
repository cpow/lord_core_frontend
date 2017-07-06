import Ember from 'ember';

const { Route, get,
  inject: { service },
} = Ember;

export default Route.extend({
  currentUser: service(),

  model() {
    return get(this, 'store').createRecord('property', {
    });
  },
});
