import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('login');
  this.route('role-handle');
  this.route('tenant-dashboard');
  this.route('manager-dashboard');
  this.route('properties', function() {
    this.route('new');
    this.route('edit', {path: 'properties/:id/edit'});
  });

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

});


export default Router;
