import Ember from 'ember';

const { Controller, computed, get,
  inject: { service },
  computed: { reads },
 } = Ember;

export default Controller.extend({
  session: service(),
  currentUser: service(),
  user: reads('currentUser.user'),

  dashboardRoute: computed('currentUser.user.role', function() {
  }),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
    },

    dashboardRoute(e) {
      e.preventDefault();
      const role = get(this, 'currentUser.user.role');
      return this.transitionToRoute(`${role}-dashboard`);
    },
  },
});
