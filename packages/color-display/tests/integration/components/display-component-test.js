import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

const currentColorStub = Service.extend({
  color: 'blue',
});

module('Integration | Component | display component', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:current-color', currentColorStub);
  });

  test('it renders', async function(assert) {
    await render(hbs`{{display-component}}`);

    assert.ok(this.element.querySelector('.display-component'));
    assert.ok(this.element.querySelector('.blue'));
  });
});
