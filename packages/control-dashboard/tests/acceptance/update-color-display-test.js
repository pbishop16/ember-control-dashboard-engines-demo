import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | update color display', function(hooks) {
  setupApplicationTest(hooks);

  test('change display color', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');

    await click('[data-role=button-one]');

    assert.ok(this.element.querySelector('.blue'));

    await click('.display-component');

    assert.notOk(this.element.querySelector('.blue'));
  });
});
