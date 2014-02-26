#jslint node: true 
describe "example", ->
  it "should add two numbers", ->
    example = require("../src/example")
    result = example.add(2, 1)
    expect(result).toEqual 3
