import { module, test } from 'qunit';
import { setupRenderingTest } from 'daves-lesbian-bar/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | soundcloud-player', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SoundcloudPlayer />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SoundcloudPlayer>
        template block text
      </SoundcloudPlayer>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
