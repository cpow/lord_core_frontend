import Ember from 'ember';
import { task } from 'ember-concurrency';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { get, Route,
  inject: { service },
} = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
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
