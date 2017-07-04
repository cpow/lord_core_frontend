import Ember from 'ember';

const { Controller,
  inject: { service },
  computed: { reads },
} = Ember;

export default Controller.extend({
  currentUser: service(),
  user: reads('currentUser.user'),
  company: reads('currentUser.user.company')
});
