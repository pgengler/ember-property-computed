# ember-property-computed [![Build Status](https://travis-ci.org/pgengler/ember-property-computed.svg?branch=master)](https://travis-ci.org/pgengler/ember-property-computed)

This is an ember-cli addon that provides an alternative way of defining computed properties. It works just like `Ember.computed` except that it takes the function as the first argument, not the last. (This is the same order that's used when defining computed properties using the `.property` prototype extension.)

## Installation
```
ember install ember-property-computed
```

## Usage
```js
import Ember from 'ember';
import cp from 'ember-property-computed';

// Define an object with a computed property
export default Ember.Object.extend({
  firstName: 'John',
  lastName: 'Doe',
  fullName: cp(function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  }, 'firstName', 'lastName') 
  // Keeps dependent keys at the end but is compatible with prototype extensions being disabled. 
});
```

## Development

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
