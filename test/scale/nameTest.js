var vows = require('vows')
var assert = require('assert')
var name = require('../../lib/scale/name')

vows.describe('scale/name').addBatch({
  'scale names': function () {
    assert.deepEqual(name('C D E F G A B'), ['C major', 'C ionian'])
    assert.deepEqual(name('D E F G A B C'), ['D dorian'])
  }
}).export(module)
