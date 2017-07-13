/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    'ember-simple-auth': {
      authorizer: 'authorizer:token',
      authenticationRoute: 'login',
      routeAfterAuthentication: 'role-handle',
    },
    'ember-simple-auth-token': {
      serverTokenEndpoint: '/api/v1/login',
      identificationField: 'email',
      passwordField: 'password',
      tokenPropertyName: 'token',
      timeFactor: 2000,
      authorizationPrefix: null,
      authorizationHeaderName: 'Authorization'
    },
    modulePrefix: 'lord-core-frontend',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
  }

  if (environment === 'production') {

  }

  return ENV;
};
