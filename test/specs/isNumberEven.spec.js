const NumbersValidator = '../../app/numbers_validator'
const {expect} = 'chai';

describe(`isNumberEven positive scenarios`, function(){
    let validator;
    beforeEach(function(){
        vaidator = new NumbersValidator();
  });
    afterEach(function(){
      validator = null;
  });
  it(`should return true if number is even`, function() {
      expect(validator.isNumberEven(4)).to.be.equal(true);
  });
});