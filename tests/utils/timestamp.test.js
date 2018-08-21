'use strict';

const timestamp = require('../../utils/timestamp.js');

describe('timestamp', () => {
  it('should return an object which has a "unix" and a "utc" key', () => {
    const ts = timestamp();

    expect(typeof ts).toBe('object');

    const actual = Object.keys(ts);
    const expected = ['unix', 'utc'];

    expect(actual).toEqual(expected);
  });

  it('should return both formats if I pass a unix timestamp', () => {
    const actual = timestamp(1534864357172);
    const expected = {
      unix: 1534864357172,
      utc: 'Tue, 21 Aug 2018 15:12:37 GMT',
    };

    expect(actual).toEqual(expected);
  });

  it('should return both formats if I pass a human readable date', () => {
    // these use the Europe/London timezone set in package.json
    const actualGB = timestamp('22 August 2018');
    const actualHU = timestamp('2018. augusztus 22.');
    const actualUS = timestamp('August 22, 2018');

    const expected = {
      unix: 1534892400000,
      utc: 'Tue, 21 Aug 2018 23:00:00 GMT',
    };

    expect(actualGB).toEqual(expected);
    expect(actualHU).toEqual(expected);
    expect(actualUS).toEqual(expected);
  });

  it('should return the current timestamp if the date string is empty', () => {
    const actual = timestamp();
    const currentDate = new Date();
    const expected = {
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString(),
    };

    expect(actual).toEqual(expected);
  });

  it('should return an error message if the argument is an invalid date string', () => {
    const actual = timestamp('gibberish');
    const expected = {
      error: 'Invalid Date',
    };

    expect(actual).toEqual(expected);
  });
});
