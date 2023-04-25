import { module, test } from 'qunit';
import { setupTest } from 'daves-lesbian-bar/tests/helpers';

module('Unit | Route | sound-journey', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:sound-journey');
    assert.ok(route);
  });
});
