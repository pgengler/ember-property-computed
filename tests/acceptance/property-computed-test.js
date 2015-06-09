import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import cp from 'ember-property-computed';

var application;

module('Acceptance | property computed', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('computed properties are set up correctly', function(assert) {
  assert.expect(3);

  var ObjectWithProperty = Ember.Object.extend({
    original: 'originalValue',
    alias1: cp(function() {
      return this.get('original');
    }, 'original'),
    alias2: cp(function() {
      assert.ok(true);
      return this.get('original');
    }, 'original')
  });
  var object = ObjectWithProperty.create();

  assert.equal('originalValue', object.get('alias1'));
  object.set('original', 'newValue');
  assert.equal('newValue', object.get('alias2'));
});
