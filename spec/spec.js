var myCode = require('./../grades.js')

describe('#letterGrade()', function(){
  it('get letter grade', function(){
    expect(myCode.letterGrade(92)).toEqual('A-');
  });
});

describe('#average()', function(){
  it('get average score', function(){
    expect(myCode.average([90, 95, 87, 60])).toEqual(83);
  });
});

describe('#median()', function(){
  it('find median score', function(){
    expect(myCode.median([52,80,80,86,94])).toEqual(80);
  });
});