import Ember from 'ember';
import Route from 'ember-route';
import service from 'ember-service/inject';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

import { task } from 'ember-concurrency';

const { get } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  _authenticatedSessionTask: task(function * () {
    yield get(this, '_loadCurrentUserTask').perform();
    this.transitionTo(this.routeFromAuthenticatedRole());
  }),

  _loadCurrentUserTask: task(function * () {
    yield this.get('currentUser').load();
  }),

  beforeModel() {
    get(this, '_loadCurrentUserTask').perform();
  },

  routeFromAuthenticatedRole() {
    let role = this.get('currentUser.user.role');
    if (role) {
      return `${role}-dashboard`;
    } else {
      return '/';
    }
  },

  sessionAuthenticated() {
    this._super(...arguments);
    get(this, '_authenticatedSessionTask').perform();
  }
});

