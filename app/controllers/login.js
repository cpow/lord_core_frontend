import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get,
  inject: { service }
} = Ember;

export default Controller.extend({
  session: service(),

  submit: task(function * (changeset){
    let credentials = changeset.getProperties('identification', 'password');
    yield get(this, 'session').authenticate('authenticator:token', credentials);
    this.transitionToRoute('/');
  }),
});
