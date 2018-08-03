import Service from '@ember/service';

export default Service.extend({
  /* { valueService: 'service', valueIndex: int, value: value } */
  values: null,

  init() {
    this._super(...arguments);

    this.set('values', []);
  },

  addValue(value) {
    const valuesForService = this.get('values').filterBy('valueService');
    const sortedValuesForService = valuesForService.sortBy('valueIndex:asc');
    const previousIndex = sortedValuesForService.get('lastObject.valueIndex') || 0;
    value.valueIndex = previousIndex + 1;
    const values = this.get('values');

    if (values.length === 10) {
      values.shiftObject();
    }

    values.pushObject(value);
  },

  clearValues(service) {
    const values = this.get('values');
    const valuesToRemove = values.findBy('service', service);

    values.removeObjects(valuesToRemove);
  },
});
