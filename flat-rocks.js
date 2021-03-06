const Util = require('util');
const AbstractLevelDOWN = require('abstract-leveldown').AbstractLevelDOWN;
const binding = require('bindings')('flat-rocks').flatrocks;
const ChainedBatch = require('./chained-batch'), Iterator = require('./iterator');


function FlatRocks(location) {
  if (!(this instanceof FlatRocks))
    return new FlatRocks(location);

  AbstractLevelDOWN.call(this, location);
  this.binding = binding(location);
}
Util.inherits(FlatRocks, AbstractLevelDOWN);

FlatRocks.prototype._open = function(options, callback) {
  this.binding.open(options, callback);
};

FlatRocks.prototype._close = function(callback) {
  this.binding.close(callback);
};

FlatRocks.prototype._put = function(key, value, options, callback) {
  this.binding.put(key, value, options, callback);
};

FlatRocks.prototype._get = function(key, options, callback) {
  this.binding.get(key, options, callback);
};

FlatRocks.prototype._del = function(key, options, callback) {
  this.binding.del(key, options, callback);
};

FlatRocks.prototype._chainedBatch = function() {
  return new ChainedBatch(this);
};

FlatRocks.prototype._batch = function(operations, options, callback) {
  return this.binding.batch(operations, options, callback);
};

FlatRocks.prototype._approximateSize = function(start, end, callback) {
  this.binding.approximateSize(start, end, callback);
};

FlatRocks.prototype.getProperty = function(property) {
  if (typeof property != 'string')
    throw new Error('getProperty() requires a valid `property` argument');

  return this.binding.getProperty(property);
};

FlatRocks.prototype._iterator = function(options) {
  return new Iterator(this, options);
};

FlatRocks.destroy = function(location, callback) {
  if (arguments.length < 2)
    throw new Error('destroy() requires `location` and `callback` arguments');

  if (typeof location != 'string')
    throw new Error('destroy() requires a location string argument');

  if (typeof callback != 'function')
    throw new Error('destroy() requires a callback function argument');

  binding.destroy(location, callback);
};

FlatRocks.repair = function(location, callback) {
  if (arguments.length < 2)
    throw new Error('repair() requires `location` and `callback` arguments');

  if (typeof location != 'string')
    throw new Error('repair() requires a location string argument');

  if (typeof callback != 'function')
    throw new Error('repair() requires a callback function argument');

  binding.repair(location, callback);
};

module.exports = FlatRocks;
