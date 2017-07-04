import Ember from 'ember';
import config from './config/environment';

const { get, set } = Ember;

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  activate() {
    set(this, 'session.store.initialURL', get(this, 'routeName'));
  }
});

Router.map(function() {
  this.route('login');
  this.route('tenant-dashboard');
  this.route('manager-dashboard');

  this.route('users', function() {
    this.route('stripe-account', {path: '/:user_id/stripe-account'}, function() {
      this.route('new');
      this.route('edit');
    });
  });

  this.route('stripe-account', function() {});

  this.route('user', function() {
    this.route('stripe-account');
  });

  this.route('properties');
});

export default Router;
