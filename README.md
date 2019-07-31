# Hapi rollbar

Hapi [plugin] for [rollbar][1]

## Getting started

```JavaScript
const Hapi = require('@hapi/hapi');
const plugin = require('hapi-rollbar');

const server = Hapi.Server();

server.register({
  plugin,
  options: {
    accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  },
});

```

Options are based directly to Rollbar so check [the docs][3] for a full list.

## Development

- Run `yarn test-watch` to watch tests
- Run `yarn deploy` to run tests, push and publish package

## Requirements

- Node 10+

[1]: https://docs.rollbar.com/docs/nodejs
[2]: https://hapijs.com/api#plugins
[3]: https://docs.rollbar.com/docs/rollbarjs-configuration-reference#section-context
