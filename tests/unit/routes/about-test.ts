import { module, test } from 'qunit';
import { setupTest } from 'daves-lesbian-bar/tests/helpers';

module('Unit | Route | about', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:about');
    assert.ok(route);
  });
});
