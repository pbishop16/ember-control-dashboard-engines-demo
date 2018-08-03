import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  updateValue: service('update-value'),

  sortValues: ['valueIndex:desc'], /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */

  colorValues: computed.filterBy('updateValue.values', 'valueService', 'current-color'),
  sortedColorValues: computed.sort('colorValues', 'sortValues'),

  color: computed.readOnly('sortedColorValues.firstObject.value'),

  setColor(color) {
    const valueObject = { valueService: 'current-color', value: color };

    this.get('updateValue').addValue(valueObject);
  },
});
