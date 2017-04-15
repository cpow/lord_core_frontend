import Ember from 'ember';
import { task } from 'ember-concurrency';

const { get, Route,
  inject: { service },
} = Ember;

export default Route.extend({
  currentUser: service(),

  newStripeTask: task(function * () {
    "use strict";
  }),

  model() {
    return {
      modelTask: get(this, 'modelTask').perform()
    };
  },

  modelTask: task(function * (){
    return yield get(this, 'currentUser.user.company');
  }),
});
