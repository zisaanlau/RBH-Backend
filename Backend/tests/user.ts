import chai from 'chai'
import chaiHttp from 'chai-http'
import {App} from "../app"
// var app = require('../app');
chai.use(chaiHttp);
chai.should();
// global.
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

