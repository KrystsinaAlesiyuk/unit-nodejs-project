const {expect} = require('chai');

describe(`types of expects`, function() {
  it(`equal`, function() {
    expect(5).to.be.equal(5);
  });
  it(`above`, function() {
    expect(5).to.be.above(4);
  });
  it(`below`, function() {
    expect(5).to.be.below(6);
  });
  it(`object has some property`, function() {
    expect({a: 'apple', b: 43}).to.have.property('a');
  });
  it(`objects equality`, function() {
    expect({a: 'apple', b: 43}).to.be.eql({a: 'apple', b: 43});
  });
  it(`array euality`, function() {
    expect([1, 'apple']).to.be.eql([1, 'apple']);
  });
  it(`lengh of array`, function() {
    expect([1, 'apple']).to.have.lengthOf(2);
  });
});
