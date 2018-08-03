import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import layout from '../templates/components/color-button';

export default Component.extend({
  layout,

  currentColor: service('current-color'),

  tagName: 'button',
  classNames: ['button'],
  classNameBindings: ['isActive:active'],
  attributeBindings: ['role:data-role'],

  label: null,
  value: null,

  isActive: computed('currentColor.color', function() {
    return this.get('currentColor.color') === this.get('value');
  }),

  click() {
    if (!this.get('isActive')) {
      const {
        currentColor,
        value,
      } = this.getProperties(
        'currentColor',
        'value',
      );

      currentColor.setColor(value);
    }
  }
});
