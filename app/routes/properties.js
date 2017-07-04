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

  company: reads('currentUser.user.company'),

  model() {
    return get(this, 'modelTask').perform();
  },

  modelTask: task(function * () {
    const companyId = get(this, 'company.id');
    return yield this.store.query('property', {company_id: companyId});
  }),
});
