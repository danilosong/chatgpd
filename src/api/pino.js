require('dotenv').config();
const 	logger = require('pino') ({
	level: process.env.pino || 'info'
})

logger.info( `Pino: ${process.env.pino || 'info'}`)

module.exports = logger;