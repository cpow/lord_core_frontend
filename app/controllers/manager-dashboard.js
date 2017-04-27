import Ember from 'ember';

const { Controller,
  inject: { service },
  computed: { readOnly },
} = Ember;

export default Controller.extend({
  currentUser: service(),
  user: readOnly('currentUser.user'),
});
