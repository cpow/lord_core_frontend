import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Component, get,
  inject: { service }
} = Ember;

export default Component.extend({
  session: service(),

  submit: task(function * (changeset){
    let credentials = changeset.getProperties('identification', 'password');
    try {
      yield get(this, 'session').authenticate('authenticator:token', credentials);
      get(this, 'onLogin')();
    } catch(e) {
      this.set('errors', e);
    }
  }),
});
