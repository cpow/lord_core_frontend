import Ember from 'ember';
import EmObj from 'ember-object';

const { Route } = Ember;

export default Route.extend({
  model() {
    return EmObj.create({
      email: null,
      password: null
    });
  },
});
