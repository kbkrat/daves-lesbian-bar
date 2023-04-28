import { module, test } from 'qunit';
import { setupRenderingTest } from 'daves-lesbian-bar/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | text', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Text />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Text>
        template block text
      </Text>
    `);

    assert.dom().hasText('template block text');
  });
});
