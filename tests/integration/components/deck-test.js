import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupIntl } from 'ember-intl/test-support';
import EmberObject from "@ember/object";
import sinon from 'sinon';

module('Integration | Component | deck', function(hooks) {
  setupRenderingTest(hooks);
  setupIntl(hooks, 'en-gb');

  test('Data renders in component', async function(assert) {

    const deck = EmberObject.create({
      cardCount:10
    });

    this.set('deck', deck);

    await render(hbs`
      <Deck @deck={{deck}} />
    `);

    const drawCardBtn = this.element.querySelector('[data-test="draw-card-btn"]');
    const cardCountParagraph = this.element.querySelector('[data-test="deck-card-count"]');

    assert.expect(2);
    assert.equal(drawCardBtn.textContent.trim(), 'Draw a card');
    assert.equal(cardCountParagraph.textContent.trim(), '10');

  });

  test('Data renders in component', async function(assert) {
    assert.expect(3);
    const deck = EmberObject.create({
      cardCount: 1
    });

    this.set('deck', deck);

    const alert = sinon.stub(window, 'alert');

    await render(hbs`
      <Deck @deck={{deck}} />
    `);

    const drawCardBtn = this.element.querySelector('[data-test="draw-card-btn"]');
    const cardCountParagraph = this.element.querySelector('[data-test="deck-card-count"]');

    assert.equal(cardCountParagraph.textContent.trim(), '1', 'cardCount initial state is 1');

    drawCardBtn.click();

    assert.equal(cardCountParagraph.textContent.trim(), '0', 'cardCount new value is 0');

    drawCardBtn.click();

    assert.deepEqual(alert.calledWith("You have ran out of cards"), true);

    alert.restore();
  });
});
