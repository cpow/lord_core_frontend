import Ember from 'ember';
import { task } from 'ember-concurrency';

const { Controller, get,
  computed: {readOnly},
} = Ember;
const {inject: { service }} = Ember;

export default Controller.extend({
  currentUser: service(),
  user: Ember.computed.readOnly('currentUser.user'),

});
