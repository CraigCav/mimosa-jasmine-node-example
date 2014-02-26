/*jslint node: true */

"use strict";

function Calculator() {}


Calculator.prototype.add = function(a, b) {
  return a + b;
};

module.exports = new Calculator();