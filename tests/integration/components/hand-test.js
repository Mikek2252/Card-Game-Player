import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

module('Integration | Component | hand', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders cards', async function(assert) {
    const hand = EmberObject.create({
      cards: [{
        title: 'card1'
      }, {
        title: 'card2'
      }, {
        title: 'card3'
      }]
    });

    this.set('hand', hand);
    await render(hbs`<Hand @hand={{hand}} />`);
    const cardElements = this.element.querySelectorAll('[data-test="card"]')
    assert.equal(cardElements.length, 3);
  });
});
