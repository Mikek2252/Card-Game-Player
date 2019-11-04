import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | card', function(hooks) {
  setupRenderingTest(hooks);

  test('faceDown: true', async function(assert) {
    this.set('showBack', true)
    await render(hbs`<Card @showBack={{showBack}}/>`);

    const card = find('[data-test="card"]');
    const title = find('[data-test="card-title"]');
    const image = find('[data-test="card-image"]');
    const description = find('[data-test="card-description"]');

    assert.expect(5);
    assert.ok(card, 'card should render');
    assert.equal(card.classList.contains('face-down'), true, 'card has face-down class');
    assert.equal(title, null, 'title has not rendered');
    assert.equal(image, null, 'image has not rendered');
    assert.equal(description, null, 'description has not rendered');
  });

  test('faceDown: false', async function(assert) {
    const cardModel = {
      title: 'Pot of Greed',
      image: 'http://www.github.com',
      description: 'Draw 2 cards'
    }
    this.set('showBack', false)
    this.set('card', cardModel);
    await render(hbs`
      <Card
        @showBack={{showBack}}
        @card={{card}}
      />`
    );

    const card = find('[data-test="card"]');
    const title = find('[data-test="card-title"]');
    const image = find('[data-test="card-image"]');
    const description = find('[data-test="card-description"]');

    assert.expect(5);
    assert.ok(card, 'card should render');
    assert.equal(card.classList.contains('face-down'), false, 'card has face-down class');
    assert.equal(title.textContent.trim(), 'Pot of Greed', 'title has been rendered');
    assert.equal(image.src, 'http://www.github.com/', 'image has not rendered');
    assert.equal(description.textContent.trim(), 'Draw 2 cards', 'description has not rendered');
  });
});
