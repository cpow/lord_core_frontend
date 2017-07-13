import Route from 'ember-route';
import Ember from 'ember';
import service from 'ember-service/inject';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const { get } = Ember;

export default Route.extend(ApplicationRouteMixin, {
  currentUser: service(),
  session: service(),

  beforeModel() {
    return this._loadCurrentUser();
  },

  sessionAuthenticated() {
    this._super(...arguments);
    return this._loadCurrentUser().catch(() => get(this, 'session').invalidate());
  },

  _loadCurrentUser() {
    return get(this, 'currentUser.loadTask').perform();
  },

  invalidateInitialURL() {
    this.set('session.store.initialURL', null);
  }
});

