/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon'); /* eslint-disable-line node/no-unpublished-require */
// const MergeTrees = require('broccoli-merge-trees');
// const CompileSass = require('broccoli-sass');

module.exports = EngineAddon.extend({
  name: 'color-controls',
  lazyLoading: false,

  // treeForAddon(tree) {
  //   const defaultTree = this._super.treeForAddon.call(this, tree);
  //   const compiledSassTree = new CompileSass(tree, 'styles/addon.scss', this.name + '.css');
  //
  //   return new MergeTrees([defaultTree, compiledSassTree]);
  // }
});
