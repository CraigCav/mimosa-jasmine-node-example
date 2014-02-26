/*jslint node: true */

describe('example', function() {  

  it('should add two numbers', function() {  
    
    var example = require('../src/example');

    var result = example.add(2, 1);

    expect(result).toEqual(3);
  });

});