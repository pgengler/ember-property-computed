import Ember from 'ember';

export default function propertyComputed(func, ...keys) {
	return Ember.computed(...keys, func);
}
