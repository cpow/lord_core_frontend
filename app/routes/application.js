import Route from 'ember-route';
import Ember from 'ember';
import service from 'ember-service/inject';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { get } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  session: service(),

  activate() {
    if (get(this, 'session.isAuthenticated')){
      this.transitionTo(this.routeFromRole());
    }
  },

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser()
      .then(() => {
        return this.transitionTo(this.routeFromRole());
      })
      .catch(() => get(this, 'session').invalidate());
  },

  _loadCurrentUser() {
    return get(this, 'currentUser.loadTask').perform();
  },

  routeFromRole() {
    let role = get(this, 'currentUser.user.role');

    if (role) {
      return `${role}-dashboard`;
    }

    return '/';
  },

  invalidateInitialURL() {
    this.set('session.store.initialURL', null);
  }
});

