import Route from 'ember-route';
import Ember from 'ember';
import service from 'ember-service/inject';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { get } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  afterModel() {
    if (get(this, 'currentUser.user')) {
      this.transitionTo(this.routeFromRoleOrInitialURL());
    }
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser()
      .then(() => {
        return this.transitionTo(this.routeFromRoleOrInitialURL());
      })
      .catch(() => get(this, 'session').invalidate());
  },

  _loadCurrentUser() {
    return get(this, 'currentUser.loadTask').perform();
  },

  routeFromRoleOrInitialURL() {
    let role = get(this, 'currentUser.user.role');
    let initialURL = get(this, 'session.store.initialURL');

    if (initialURL) {
      this.invalidateInitialURL();
      return initialURL
    }

    if (role) {
      return `${role}-dashboard`;
    }

    return '/';
  },

  invalidateInitialURL() {
    this.set('session.store.initialURL', null);
  }
});

