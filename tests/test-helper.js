import resolver from './helpers/resolver';
import { setResolver } from 'ember-mocha';
import { mocha } from 'mocha';

mocha.setup({
  timeout: 120000
});

setResolver(resolver);
