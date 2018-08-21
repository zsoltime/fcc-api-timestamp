'use strict';

function timestamp(str) {
  if (!str) {
    const currentDate = new Date();
    return {
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString(),
    };
  }

  // eslint-disable-next-line no-restricted-globals
  const date = isNaN(str) ? new Date(str) : new Date(parseInt(str, 10));

  return date.getTime() > 0
    ? {
      unix: date.getTime(),
      utc: date.toUTCString(),
    }
    : {
      error: 'Invalid Date',
    };
}

module.exports = timestamp;
