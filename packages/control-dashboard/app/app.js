/* eslint-disable ember/avoid-leaking-state-in-ember-objects */

import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  engines: {
    colorDisplay: {
      dependencies: {
        services: [
          'current-color',
          'update-value',
        ],
      },
    },
    colorControls: {
      dependencies: {
        services: [
          'update-value',
        ],
      },
    },
  },
});

loadInitializers(App, config.modulePrefix);

export default App;
