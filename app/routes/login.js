import Ember from 'ember';

const { Route, get,
  inject: { service }
} = Ember;

export default Route.extend({
  session: service('session'),
  actions: {
    authenticate() {
      const credentials = this.controller.getProperties('identification', 'password');
      get(this, 'session').authenticate('authenticator:jwt', credentials)
        .then(() => {
          this.transitionTo('/');
        })
      .catch((reason) => {
        this.controller.set('errorMessage', reason.error || reason);
      });
    }
  }
});
