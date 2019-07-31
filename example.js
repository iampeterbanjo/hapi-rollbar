const Hapi = require('@hapi/hapi');
const plugin = require('./plugin');

const server = Hapi.Server();

server.register({
	plugin,
	options: {
		accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
		captureUncaught: true,
		captureUnhandledRejections: true,
	},
});
