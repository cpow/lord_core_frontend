import Ember from 'ember';
import { task } from 'ember-concurrency';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { get, Route,
  inject: { service },
} = Ember;

export default Route.extend(AuthenticatedRouteMixin, {
  currentUser: service(),

  model() {
    return get(this, 'modelTask').perform()
  },

  modelTask: task(function * (){
    const companyId = get(this, 'currentUser.user.company.id');
    yield get(this, 'store').findAll('property');
    return yield this.store.findRecord('company', companyId);
  }),
});
