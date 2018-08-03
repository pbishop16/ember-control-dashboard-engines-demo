import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import layout from '../templates/components/display-component';

export default Component.extend({
  layout,

  classNames: ['display-component'],
  classNameBindings: ['currentColorClass'],

  currentColor: service('current-color'),

  currentColorClass: computed.readOnly('currentColor.color'),

  click() {
    const currentColor = this.get('currentColor');

    if (currentColor.get('color')) {
      currentColor.setColor(null);
    }
  },
});
