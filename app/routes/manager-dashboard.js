import Ember from 'ember';
import { task } from 'ember-concurrency';

const { get, Route,
  inject: { service },
  computed: { reads, readOnly },
} = Ember;

export default Route.extend({
  currentUser: service(),

  model() {
    return {
      modelTask: get(this, 'modelTask').perform()
    };
  },

  modelTask: task(function * (){
    return yield get(this, 'currentUser.user.company');
  }),
});
