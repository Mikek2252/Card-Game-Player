import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | play-area', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`<PlayArea />`);

    const deckComponent = this.element.querySelector('[data-test="deck-component"]');

    assert.ok(deckComponent, 'deckComponent exists');

  });
});
