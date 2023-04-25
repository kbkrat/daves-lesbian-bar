import { module, test } from 'qunit';
import { setupTest } from 'daves-lesbian-bar/tests/helpers';

module('Unit | Route | sound-map', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:sound-map');
    assert.ok(route);
  });
});
