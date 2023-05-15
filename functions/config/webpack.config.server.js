const modulePath = require('path');

const serverDir = `../src`;

const serverConfig = {
	entry: { server: [modulePath.resolve(__dirname, `${serverDir}/index.ts`)] },
	target: "node"
};

module.exports = serverConfig;