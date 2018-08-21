# API Project: freeCodeCamp Timestamp Microservice [![Build Status](https://img.shields.io/travis/zsoltime/fcc-api-timestamp.svg?style=flat-square)](https://travis-ci.org/zsoltime/fcc-api-timestamp)

This is my entry for [freeCodeCamp's first "APIs & Microservices" project][fcc-link]. Demo is available on [my site][demo]. You can also check out [my other freeCodeCamp projects][projects].

## User Stories

- [ ] The API endpoint is `GET [project_url]/api/timestamp/:date_string?`
- [ ] A date string is valid if can be successfully parsed by `new Date(date_string)` (JS). Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds. In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
- [ ] If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
- [ ] If the date string is valid the API returns a JSON having the structure `{"unix": <date.getTime()>, "utc" : <date.toUTCString()> }` e.g. `{"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}`.
- [ ] If the date string is invalid the API returns a JSON having the structure `{"unix": null, "utc" : "Invalid Date" }`. It is what you get from the date manipulation functions used above.

## Example Usage

```
// TODO
```

### Example Output

```json
{
  "unix": 1534809600,
  "natural": "August 21, 2018"
}
```

## Tools Used

- [ESLint](https://github.com/eslint/eslint) linter with Airbnb's [base config](https://www.npmjs.com/package/eslint-config-airbnb-base)
- [Express.js](https://github.com/expressjs/express) framework
- [Jest](https://github.com/facebook/jest) test framework
- [Pug](https://github.com/pugjs/pug) template engine
- [Supertest](https://github.com/visionmedia/supertest/) library

## Install and Build

#### Clone this repo

```bash
git clone https://github.com/zsoltime/fcc-api-timestamp.git
cd fcc-api-timestamp
```

#### Install dependencies

```bash
npm install
```

#### Start dev server

It starts a dev server, monitor for changes and restarts on any change.

```bash
npm run dev
```

#### Start

It starts the node.js application.

```bash
npm start
```

#### Run tests

It runs tests using Jest and Supertest.

```bash
npm test
```

[demo]: https://zsolti.me/apis/timestamp
[fcc-link]: https://learn.freecodecamp.org/apis-and-microservices/apis-and-microservices-projects/timestamp-microservice
[projects]: https://github.com/zsoltime/freeCodeCamp
