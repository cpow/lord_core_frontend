import Route from 'ember-route';
import service from 'ember-service/inject';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    this._loadCurrentUser()
      .then(() => {
        return this.transitionTo(this.routeFromAuthenticatedRole());
      })
      .catch(() => this.get('session').invalidate());
  },

  _loadCurrentUser() {
    return this.get('currentUser').load();
  },

  routeFromAuthenticatedRole() {
    let role = this.get('currentUser.user.role');
    if (role) {
      return `${role}-dashboard`;
    } else {
      return '/';
    }
  }
});

