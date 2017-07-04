import Service from 'ember-service';
import { task } from 'ember-concurrency';
import Ember from 'ember';

const { get,
  inject: { service },
} = Ember;

export default Service.extend({
  session: service(),
  store: service(),

  loadTask: task(function * () {
    if (this.get('session.isAuthenticated')) {
      let user = yield get(this, 'store').queryRecord('user', { me: true });
      this.set('user', user);
      return user;
    }
  }),
});

