import Ember from 'ember';

const { Controller, get,
  inject: { service }
} = Ember;

export default Controller.extend({
  session: service('session'),

  actions: {
    submit(changeset) {
      const credentials = changeset.getProperties('identification', 'password');
      get(this, 'session').authenticate('authenticator:jwt', credentials)
        .then(() => {
          this.transitionToRoute('/');
        })
      .catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
