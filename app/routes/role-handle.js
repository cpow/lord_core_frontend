import Ember from 'ember';

const { get,
  inject: { service },
} = Ember;

export default Ember.Route.extend({
  session: service(),
  currentUser: service(),

  beforeModel() {
    //NOTE: I thought this would already be handled in the application route.
    //Not sure why I have to call this again, a little frustrating
    return get(this, 'currentUser.loadTask').perform();
  },

  model() {
    if (get(this, 'session.isAuthenticated')){
      return this.transitionTo(this.routeFromRole());
    }
    return this.transitionTo('login');
  },

  routeFromRole() {
    let role = get(this, 'currentUser.user.role');

    if (role) {
      return `${role}-dashboard`;
    }

    return '/';
  },
});
