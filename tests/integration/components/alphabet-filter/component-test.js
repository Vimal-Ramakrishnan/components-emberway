import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('alphabet-filter', 'Integration | Component | alphabet filter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{alphabet-filter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#alphabet-filter}}
      template block text
    {{/alphabet-filter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
