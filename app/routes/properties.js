import Ember from 'ember';
import { task } from 'ember-concurrency';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { Route, get,
  inject: { service },
  computed: { reads },
} = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),
  session: service(),

  companyId: reads('currentUser.user.company.id'),

  model() {
    return get(this, 'modelTask').perform();
  },

  modelTask: task(function * () {
    return yield this.store.findAll('property');
  }),
});
