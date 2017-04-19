import Service from 'ember-service';
import service from 'ember-service/inject';

import { task } from 'ember-concurrency';

export default Service.extend({
  session: service(),
  store: service(),

  loadTask: task(function * () {
    if (this.get('session.isAuthenticated')) {
      let user = yield this.get('store').queryRecord('user', { me: true });
      this.set('user', user);
      return user;
    }
  }),
});

