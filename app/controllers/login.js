import Ember from 'ember';

const { Controller,
  inject: { service }
} = Ember;

export default Controller.extend({
  session: service(),

  actions: {
    completeLogin(){
      this.transitionToRoute('/');
    }
  }
});
